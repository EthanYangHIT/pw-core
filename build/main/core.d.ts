import { RPC } from 'ckb-js-toolkit';
import { Config } from './interfaces';
import { Address, Amount, Transaction } from './models';
import { Signer } from './signers';
import { Collector } from './collectors';
import { Builder } from './builders';
import { Provider } from './providers';
export declare enum ChainID {
    ckb = 0,
    ckb_testnet = 1,
    ckb_dev = 2
}
/**
 * The default main class of pw-core
 */
export default class PWCore {
    static config: Config;
    static chainId: ChainID;
    static provider: Provider;
    static defaultCollector: Collector;
    private readonly _rpc;
    constructor(nodeUrl: string);
    /**
     * Initialize the environment required by pw-core
     */
    init(provider: Provider, defaultCollector: Collector, chainId?: ChainID, config?: Config): Promise<PWCore>;
    /**
     * Return a RPC instance defined in package 'ckb-js-toolkit'
     */
    get rpc(): RPC;
    /**
     * Transfer CKB to any address
     * @param address The receiver's address
     * @param amount The amount of CKB to send
     * @param feeRate The feeRate (Shannon/KB) for this transaction.
     */
    send(address: Address, amount: Amount, feeRate?: number): Promise<string>;
    /**
     * Send an built transaction or a builder
     * @param toSend
     * @param signer
     */
    sendTransaction(toSend: Transaction | Builder, signer?: Signer): Promise<string>;
}
