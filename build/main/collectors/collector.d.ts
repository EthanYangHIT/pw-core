import { Cell, Address, Amount } from '../models';
export interface CollectorOptions {
    withData?: boolean;
}
export declare abstract class Collector {
    protected constructor();
    abstract getBalance(address: Address): Promise<Amount>;
    abstract collect(address: Address, neededAmount?: Amount, options?: CollectorOptions): Promise<Cell[]>;
}
