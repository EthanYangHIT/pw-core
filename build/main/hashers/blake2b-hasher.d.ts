import { Hasher } from '.';
import { Reader } from 'ckb-js-toolkit';
export declare class Blake2bHasher extends Hasher {
    constructor();
    update(data: string | ArrayBuffer): Hasher;
    digest(): Reader;
    reset(): void;
}
