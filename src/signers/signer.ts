import { Transaction, WitnessArgs } from '..';
import { Hasher, Blake2bHasher, Keccak256Hasher } from '../hashers';
import { normalizers, Reader, transformers } from '../ckb-js-toolkit';
import {
  SerializeWitnessArgs,
  SerializeRawTransaction,
} from '../ckb-lumos/core';
import { Script, LockType } from '../models';

export interface Message {
  index: number;
  message: string;
  lock: Script;
}

export abstract class Signer {
  protected abstract signMessages(messages: Message[]): Promise<string[]>;

  async sign(tx: Transaction): Promise<Transaction> {
    const messages = this.toMessages(tx);
    const witnesses = await this.signMessages(messages);

    for (let i = 0; i < messages.length; i++) {
      const { index } = messages[i];
      if (
        index < tx.witnessArgs.length &&
        typeof tx.witnessArgs[index] !== 'string'
      ) {
        witnesses[i] = new Reader(
          SerializeWitnessArgs(
            normalizers.NormalizeWitnessArgs({
              ...(tx.witnessArgs[index] as WitnessArgs),
              lock: witnesses[i],
            })
          )
        ).serializeJson();
      }
    }
    tx = FillSignedWitnesses(tx, messages, witnesses);

    return tx;
  }

  protected initHasher(lockScript: Script): Hasher {
    if (lockScript.identifyLockType() === LockType.pw)
      return new Keccak256Hasher();
    else return new Blake2bHasher();
  }

  public toMessages(tx: Transaction): Message[] {
    tx.validate();

    if (tx.raw.inputs.length !== tx.raw.inputCells.length) {
      throw new Error('Input number does not match!');
    }

    const txHash = new Blake2bHasher().hash(
      new Reader(
        SerializeRawTransaction(
          normalizers.NormalizeRawTransaction(
            transformers.TransformRawTransaction(tx.raw)
          )
        )
      )
    );

    const messages = [];
    const used = tx.raw.inputs.map(() => false);
    for (let i = 0; i < tx.raw.inputs.length; i++) {
      if (used[i]) {
        continue;
      }
      if (i >= tx.witnesses.length) {
        throw new Error(
          `Input ${i} starts a new script group, but witness is missing!`
        );
      }
      used[i] = true;
      const hasher = this.initHasher(tx.raw.inputCells[i].lock);
      hasher.update(txHash.toArrayBuffer());
      const firstWitness = new Reader(tx.witnesses[i]);
      hasher.update(serializeBigInt(firstWitness.length()));
      hasher.update(firstWitness.toArrayBuffer());
      for (
        let j = i + 1;
        j < tx.raw.inputs.length && j < tx.witnesses.length;
        j++
      ) {
        if (tx.raw.inputCells[i].lock.sameWith(tx.raw.inputCells[j].lock)) {
          used[j] = true;
          const currentWitness = new Reader(tx.witnesses[j]);
          hasher.update(serializeBigInt(currentWitness.length()));
          hasher.update(currentWitness.toArrayBuffer());
        }
      }
      messages.push({
        index: i,
        message: hasher.digest().serializeJson(), // hex string
        lock: tx.raw.inputCells[i].lock,
      });

      hasher.reset();
    }

    return messages;
  }
}

function FillSignedWitnesses(
  tx: Transaction,
  messages: Message[],
  witnesses: string[]
) {
  if (messages.length !== witnesses.length) {
    throw new Error('Invalid number of witnesses!');
  }
  for (let i = 0; i < messages.length; i++) {
    tx.witnesses[messages[i].index] = witnesses[i];
  }
  return tx;
}

function serializeBigInt(i: number) {
  const view = new DataView(new ArrayBuffer(8));
  view.setUint32(0, i, true);
  return view.buffer;
}
