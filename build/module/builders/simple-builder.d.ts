import { Builder } from '../builders/builder';
import { Collector } from '../collectors/collector';
import { Address, Amount, Transaction } from '../models';
export declare class SimpleBuilder extends Builder {
    private address;
    private amount;
    constructor(address: Address, amount: Amount, feeRate?: number, collector?: Collector);
    build(fee?: Amount): Promise<Transaction>;
    getCollector(): Collector;
}
