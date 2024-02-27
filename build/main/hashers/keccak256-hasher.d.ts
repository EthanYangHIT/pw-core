import { Hasher } from '.';
import { Reader } from 'ckb-js-toolkit';
export declare class Keccak256Hasher extends Hasher {
    constructor();
    update(data: string | ArrayBuffer | Reader): Hasher;
    digest(): Reader;
    reset(): void;
}
