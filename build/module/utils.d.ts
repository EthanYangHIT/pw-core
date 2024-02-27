import { FormatOptions } from '.';
export declare const BASE = "100000000";
export declare const shannonToCKB: (shannonAmount: string, options?: FormatOptions) => string;
export declare const ckbToShannon: (ckbAmount: string) => string;
export declare const LumosConfigs: {
    PREFIX: string;
    SCRIPTS: {
        SECP256K1_BLAKE160: {
            SCRIPT: {
                code_hash: string;
                hash_type: string;
            };
            OUT_POINT: {
                tx_hash: string;
                index: string;
            };
            DEP_TYPE: string;
            SHORT_ID: number;
        };
        SECP256K1_BLAKE160_MULTISIG: {
            SCRIPT: {
                code_hash: string;
                hash_type: string;
            };
            OUT_POINT: {
                tx_hash: string;
                index: string;
            };
            DEP_TYPE: string;
            SHORT_ID: number;
        };
    };
}[];
export declare function byteArrayToHex(a: any): string;
export declare function hexToByteArray(h: string): any[];
export declare function generateAddress(script: any, { config }?: {
    config?: {
        PREFIX: string;
        SCRIPTS: {
            SECP256K1_BLAKE160: {
                SCRIPT: {
                    code_hash: string;
                    hash_type: string;
                };
                OUT_POINT: {
                    tx_hash: string;
                    index: string;
                };
                DEP_TYPE: string;
                SHORT_ID: number;
            };
            SECP256K1_BLAKE160_MULTISIG: {
                SCRIPT: {
                    code_hash: string;
                    hash_type: string;
                };
                OUT_POINT: {
                    tx_hash: string;
                    index: string;
                };
                DEP_TYPE: string;
                SHORT_ID: number;
            };
        };
    };
}): string;
export declare function parseAddress(address: string, { config }?: {
    config?: {
        PREFIX: string;
        SCRIPTS: {
            SECP256K1_BLAKE160: {
                SCRIPT: {
                    code_hash: string;
                    hash_type: string;
                };
                OUT_POINT: {
                    tx_hash: string;
                    index: string;
                };
                DEP_TYPE: string;
                SHORT_ID: number;
            };
            SECP256K1_BLAKE160_MULTISIG: {
                SCRIPT: {
                    code_hash: string;
                    hash_type: string;
                };
                OUT_POINT: {
                    tx_hash: string;
                    index: string;
                };
                DEP_TYPE: string;
                SHORT_ID: number;
            };
        };
    };
}): {
    args: string;
    code_hash: string;
    hash_type: string;
};
export declare function verifyCkbAddress(address: string): boolean;
export declare function verifyEthAddress(address: string): boolean;
