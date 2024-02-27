import { CKBModel } from '../interfaces';
import { Amount, Script, OutPoint } from '.';
import { CellInput } from './cell-input';
import { RPC } from 'ckb-js-toolkit';
export declare class Cell implements CKBModel {
    capacity: Amount;
    lock: Script;
    type?: Script;
    outPoint?: OutPoint;
    private data;
    static fromRPC(data: any): Cell;
    static loadFromBlockchain(rpc: RPC, outPoint: OutPoint): Promise<Cell>;
    constructor(capacity: Amount, lock: Script, type?: Script, outPoint?: OutPoint, data?: string);
    sameWith(cell: Cell): boolean;
    resize(): number;
    spaceCheck(): boolean;
    toCellInput(since?: string): CellInput | undefined;
    validate(): Cell;
    serializeJson(): object;
    setData(data: string): void;
    setHexData(data: string): void;
    getData(): string;
    getHexData(): string;
    isEmpty(): boolean;
}
