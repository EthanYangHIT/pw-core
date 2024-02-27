import { CKBModel, WitnessArgs } from '../interfaces';
import { RawTransaction } from '.';
export declare class Transaction implements CKBModel {
    raw: RawTransaction;
    witnessArgs: WitnessArgs[];
    witnesses: string[];
    constructor(raw: RawTransaction, witnessArgs: WitnessArgs[], witnessLengths?: number[]);
    sameWith(tx: Transaction): boolean;
    getSize(): number;
    validate(): Transaction;
    transform(): object;
    serializeJson(): object;
}
