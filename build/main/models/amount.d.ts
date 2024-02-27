import JSBI from 'jsbi';
export declare enum AmountUnit {
    ckb = 0,
    shannon = 1
}
export interface FormatOptions {
    section?: 'full' | 'whole' | 'fraction';
    pad?: boolean;
    commify?: boolean;
    fixed?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}
export declare class Amount {
    static ZERO: Amount;
    add(val: Amount): Amount;
    sub(val: Amount): Amount;
    mul(val: Amount): Amount;
    gt(val: Amount): boolean;
    gte(val: Amount): boolean;
    lt(val: Amount): boolean;
    lte(val: Amount): boolean;
    eq(val: Amount): boolean;
    private amount;
    private unit;
    constructor(amount: string, unit?: AmountUnit);
    toString(unit?: AmountUnit, options?: FormatOptions): string;
    toBigInt(): JSBI;
    toHexString(): string;
}
