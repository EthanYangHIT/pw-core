import { Address } from '..';
export declare enum Platform {
    ckb = 0,
    eth = 1
}
export declare abstract class Provider {
    readonly platform: Platform;
    constructor(platform: Platform);
    private _address;
    get address(): Address;
    set address(value: Address);
    abstract init(): Promise<Provider>;
    abstract sign(message: string): Promise<string>;
    abstract close(): any;
}
