import { Script } from '.';
export declare enum AddressPrefix {
    ckb = 0,
    ckt = 1
}
export declare enum AddressType {
    ckb = 0,
    eth = 1
}
export declare enum LockType {
    default = 0,
    multisig = 1,
    pw = 2
}
export declare function getDefaultPrefix(): AddressPrefix;
export declare class Address {
    readonly addressString: string;
    readonly addressType: AddressType;
    static fromLockScript(lockScript: Script, prefix?: AddressPrefix): Address;
    constructor(addressString: string, addressType: AddressType);
    valid(): boolean;
    toCKBAddress(): string;
    toLockScript(): Script;
}
