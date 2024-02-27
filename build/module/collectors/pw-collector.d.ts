import { Collector } from './collector';
import { Cell, Address, Amount } from '..';
export declare class PwCollector extends Collector {
    apiBase: string;
    constructor(apiBase: string);
    getBalance(address: Address): Promise<Amount>;
    collect(address: Address, neededAmount: Amount): Promise<Cell[]>;
}
