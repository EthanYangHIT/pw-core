import { CellDep, Script } from './models';
export declare const ECDSA_WITNESS_LEN = 172;
export declare const DAO_WITHDRAW_2_WITNESS_LEN = 196;
export declare const DUMMY_ADDRESSES: {
    main: string;
    ckb_testnet: string;
    ckb_dev: string;
};
export declare const CHAIN_SPECS: {
    Lina: {
        daoType: {
            cellDep: CellDep;
            script: Script;
        };
        defaultLock: {
            cellDep: CellDep;
            script: Script;
        };
        multiSigLock: {
            cellDep: CellDep;
            script: Script;
        };
        pwLock: {
            cellDep: CellDep;
            script: Script;
        };
    };
    Aggron: {
        daoType: {
            cellDep: CellDep;
            script: Script;
        };
        defaultLock: {
            cellDep: CellDep;
            script: Script;
        };
        multiSigLock: {
            cellDep: CellDep;
            script: Script;
        };
        pwLock: {
            cellDep: CellDep;
            script: Script;
        };
    };
    Lay2: {
        daoType: {
            cellDep: CellDep;
            script: Script;
        };
        defaultLock: {
            cellDep: CellDep;
            script: Script;
        };
        multiSigLock: {
            cellDep: CellDep;
            script: Script;
        };
        pwLock: {
            cellDep: CellDep;
            script: Script;
        };
    };
};
