import { Collector } from '../collectors/collector';
import { Amount, Transaction } from '../models';
export declare abstract class Builder {
    protected feeRate: number;
    protected collector: Collector;
    static readonly MIN_FEE_RATE = 1000;
    static readonly MIN_CHANGE: Amount;
    static readonly WITNESS_ARGS: {
        Secp256k1: {
            lock: string;
            input_type: string;
            output_type: string;
        };
        Secp256r1: {
            lock: string;
            input_type: string;
            output_type: string;
        };
    };
    static calcFee(tx: Transaction, feeRate?: number): Amount;
    protected fee: Amount;
    protected constructor(feeRate?: number, collector?: Collector);
    getFee(): Amount;
    abstract build(): Promise<Transaction>;
}
