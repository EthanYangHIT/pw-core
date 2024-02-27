import { RPC, transformers } from 'ckb-js-toolkit';
import { CHAIN_SPECS } from './constants';
import { DefaultSigner } from './signers';
import { Collector } from './collectors';
import { SimpleBuilder, Builder } from './builders';
import { Provider } from './providers';
export var ChainID;
(function (ChainID) {
    ChainID[ChainID["ckb"] = 0] = "ckb";
    ChainID[ChainID["ckb_testnet"] = 1] = "ckb_testnet";
    ChainID[ChainID["ckb_dev"] = 2] = "ckb_dev";
})(ChainID || (ChainID = {}));
/**
 * The default main class of pw-core
 */
export default class PWCore {
    constructor(nodeUrl) {
        this._rpc = new RPC(nodeUrl);
    }
    /**
     * Initialize the environment required by pw-core
     */
    async init(provider, defaultCollector, chainId, config) {
        if (chainId) {
            if (!(chainId in ChainID)) {
                throw new Error(`invalid chainId ${chainId}`);
            }
            PWCore.chainId = chainId;
        }
        else {
            const info = await this.rpc.get_blockchain_info();
            PWCore.chainId = {
                ckb: ChainID.ckb,
                ckb_testnet: ChainID.ckb_testnet,
                ckb_dev: ChainID.ckb_dev,
            }[info.chain];
        }
        if (PWCore.chainId === ChainID.ckb_dev) {
            if (!config) {
                throw new Error('config must be provided for dev chain');
            }
            PWCore.config = config;
        }
        else {
            // merge customized config to default one
            PWCore.config = {
                ...[CHAIN_SPECS.Lina, CHAIN_SPECS.Aggron][PWCore.chainId],
                ...config,
            };
        }
        if (provider instanceof Provider) {
            PWCore.provider = await provider.init();
        }
        else {
            throw new Error('provider must be provided');
        }
        if (defaultCollector instanceof Collector) {
            PWCore.defaultCollector = defaultCollector;
        }
        else {
            throw new Error('defaultCollector must be provided');
        }
        return this;
    }
    /**
     * Return a RPC instance defined in package 'ckb-js-toolkit'
     */
    get rpc() {
        return this._rpc;
    }
    /**
     * Transfer CKB to any address
     * @param address The receiver's address
     * @param amount The amount of CKB to send
     * @param feeRate The feeRate (Shannon/KB) for this transaction.
     */
    async send(address, amount, feeRate) {
        const simpleBuilder = new SimpleBuilder(address, amount, feeRate);
        return this.sendTransaction(simpleBuilder);
    }
    /**
     * Send an built transaction or a builder
     * @param toSend
     * @param signer
     */
    async sendTransaction(toSend, signer) {
        const tx = toSend instanceof Builder ? await toSend.build() : toSend;
        tx.validate();
        if (!signer) {
            signer = new DefaultSigner(PWCore.provider);
        }
        return this.rpc.send_transaction(transformers.TransformTransaction(await signer.sign(tx)));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUcxQyxPQUFPLEVBQUUsYUFBYSxFQUFVLE1BQU0sV0FBVyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV2QyxNQUFNLENBQU4sSUFBWSxPQUlYO0FBSkQsV0FBWSxPQUFPO0lBQ2pCLG1DQUFHLENBQUE7SUFDSCxtREFBVyxDQUFBO0lBQ1gsMkNBQU8sQ0FBQTtBQUNULENBQUMsRUFKVyxPQUFPLEtBQVAsT0FBTyxRQUlsQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFNO0lBUXpCLFlBQVksT0FBZTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxJQUFJLENBQ1IsUUFBa0IsRUFDbEIsZ0JBQTJCLEVBQzNCLE9BQWlCLEVBQ2pCLE1BQWU7UUFFZixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsRUFBRTtnQkFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUMvQztZQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFCO2FBQU07WUFDTCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNsRCxNQUFNLENBQUMsT0FBTyxHQUFHO2dCQUNmLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztnQkFDaEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2dCQUNoQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87YUFDekIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDZjtRQUVELElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDeEI7YUFBTTtZQUNMLHlDQUF5QztZQUN6QyxNQUFNLENBQUMsTUFBTSxHQUFHO2dCQUNkLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUN6RCxHQUFHLE1BQU07YUFDVixDQUFDO1NBQ0g7UUFFRCxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7WUFDaEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxnQkFBZ0IsWUFBWSxTQUFTLEVBQUU7WUFDekMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1NBQzVDO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUNSLE9BQWdCLEVBQ2hCLE1BQWMsRUFDZCxPQUFnQjtRQUVoQixNQUFNLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEtBQUssQ0FBQyxlQUFlLENBQ25CLE1BQTZCLEVBQzdCLE1BQWU7UUFFZixNQUFNLEVBQUUsR0FBRyxNQUFNLFlBQVksT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUM5QixZQUFZLENBQUMsb0JBQW9CLENBQUMsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0NBQ0YifQ==