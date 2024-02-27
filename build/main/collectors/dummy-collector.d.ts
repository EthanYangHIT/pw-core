import { Collector } from './collector';
import { Cell, Address, Amount } from '..';
export declare class DummyCollector extends Collector {
    getBalance(): Promise<Amount>;
    constructor();
    collect(address: Address): Promise<Cell[]>;
}
