"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signer = void 0;
const hashers_1 = require("../hashers");
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
// import JSBI from 'jsbi';
const core_1 = require("@ckb-lumos/types/lib/core");
class Signer {
    constructor(hasher) {
        this.hasher = hasher;
    }
    async sign(tx) {
        console.log('[signer] tx before: ', tx);
        const messages = this.toMessages(tx);
        const witnesses = await this.signMessages(messages);
        witnesses[0] = new ckb_js_toolkit_1.Reader(core_1.SerializeWitnessArgs(ckb_js_toolkit_1.normalizers.NormalizeWitnessArgs(Object.assign(Object.assign({}, tx.witnessArgs[0]), { lock: witnesses[0] })))).serializeJson();
        tx = FillSignedWitnesses(tx, messages, witnesses);
        console.log('[signer] tx after: ', tx);
        return tx;
    }
    toMessages(tx) {
        tx.validate();
        if (tx.raw.inputs.length !== tx.raw.inputCells.length) {
            throw new Error('Input number does not match!');
        }
        const txHash = new hashers_1.Blake2bHasher().hash(new ckb_js_toolkit_1.Reader(core_1.SerializeRawTransaction(ckb_js_toolkit_1.normalizers.NormalizeRawTransaction(ckb_js_toolkit_1.transformers.TransformRawTransaction(tx.raw)))));
        const messages = [];
        const used = tx.raw.inputs.map((_input) => false);
        for (let i = 0; i < tx.raw.inputs.length; i++) {
            if (used[i]) {
                continue;
            }
            if (i >= tx.witnesses.length) {
                throw new Error(`Input ${i} starts a new script group, but witness is missing!`);
            }
            used[i] = true;
            this.hasher.update(txHash);
            const firstWitness = new ckb_js_toolkit_1.Reader(tx.witnesses[i]);
            this.hasher.update(serializeBigInt(firstWitness.length()));
            this.hasher.update(firstWitness);
            for (let j = i + 1; j < tx.raw.inputs.length && j < tx.witnesses.length; j++) {
                if (tx.raw.inputCells[i].lock.sameWith(tx.raw.inputCells[j].lock)) {
                    used[j] = true;
                    const currentWitness = new ckb_js_toolkit_1.Reader(tx.witnesses[j]);
                    this.hasher.update(serializeBigInt(currentWitness.length()));
                    this.hasher.update(currentWitness);
                }
            }
            messages.push({
                index: i,
                message: this.hasher.digest().serializeJson(),
                lock: tx.raw.inputCells[i].lock,
            });
            this.hasher.reset();
        }
        return messages;
    }
}
exports.Signer = Signer;
function FillSignedWitnesses(tx, messages, witnesses) {
    if (messages.length !== witnesses.length) {
        throw new Error('Invalid number of witnesses!');
    }
    for (let i = 0; i < messages.length; i++) {
        tx.witnesses[messages[i].index] = witnesses[i];
    }
    return tx;
}
function serializeBigInt(i) {
    const view = new DataView(new ArrayBuffer(8));
    view.setUint32(0, i, true);
    return view.buffer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NpZ25lcnMvc2lnbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdDQUFtRDtBQUNuRCxtREFBbUU7QUFDbkUsMkJBQTJCO0FBQzNCLG9EQUdtQztBQU9uQyxNQUFzQixNQUFNO0lBQzFCLFlBQXVDLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUl6RCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSx1QkFBTSxDQUN2QiwyQkFBb0IsQ0FDbEIsNEJBQVcsQ0FBQyxvQkFBb0IsaUNBQzNCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQ3BCLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQ2xCLENBQ0gsQ0FDRixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xCLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdkMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8sVUFBVSxDQUFDLEVBQWU7UUFDaEMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWQsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxVQUFV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