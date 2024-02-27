"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainID = void 0;
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
const constants_1 = require("./constants");
const signers_1 = require("./signers");
const collectors_1 = require("./collectors");
const builders_1 = require("./builders");
const providers_1 = require("./providers");
var ChainID;
(function (ChainID) {
    ChainID[ChainID["ckb"] = 0] = "ckb";
    ChainID[ChainID["ckb_testnet"] = 1] = "ckb_testnet";
    ChainID[ChainID["ckb_dev"] = 2] = "ckb_dev";
})(ChainID = exports.ChainID || (exports.ChainID = {}));
/**
 * The default main class of pw-core
 */
class PWCore {
    constructor(nodeUrl) {
        this._rpc = new ckb_js_toolkit_1.RPC(nodeUrl);
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
            PWCore.config = Object.assign(Object.assign({}, [constants_1.CHAIN_SPECS.Lina, constants_1.CHAIN_SPECS.Aggron][PWCore.chainId]), config);
        }
        if (provider instanceof providers_1.Provider) {
            PWCore.provider = await provider.init();
        }
        else {
            throw new Error('provider must be provided');
        }
        if (defaultCollector instanceof collectors_1.Collector) {
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
        const simpleBuilder = new builders_1.SimpleBuilder(address, amount, feeRate);
        return this.sendTransaction(simpleBuilder);
    }
    /**
     * Send an built transaction or a builder
     * @param toSend
     * @param signer
     */
    async sendTransaction(toSend, signer) {
        const tx = toSend instanceof builders_1.Builder ? await toSend.build() : toSend;
        tx.validate();
        if (!signer) {
            signer = new signers_1.DefaultSigner(PWCore.provider);
        }
        return this.rpc.send_transaction(ckb_js_toolkit_1.transformers.TransformTransaction(await signer.sign(tx)));
    }
}
exports.default = PWCore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUFtRDtBQUNuRCwyQ0FBMEM7QUFHMUMsdUNBQWtEO0FBQ2xELDZDQUF5QztBQUN6Qyx5Q0FBb0Q7QUFDcEQsMkNBQXVDO0FBRXZDLElBQVksT0FJWDtBQUpELFdBQVksT0FBTztJQUNqQixtQ0FBRyxDQUFBO0lBQ0gsbURBQVcsQ0FBQTtJQUNYLDJDQUFPLENBQUE7QUFDVCxDQUFDLEVBSlcsT0FBTyxHQUFQLGVBQU8sS0FBUCxlQUFPLFFBSWxCO0FBRUQ7O0dBRUc7QUFDSCxNQUFxQixNQUFNO0lBUXpCLFlBQVksT0FBZTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksb0JBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsSUFBSSxDQUNSLFFBQWtCLEVBQ2xCLGdCQUEyQixFQUMzQixPQUFpQixFQUNqQixNQUFlO1FBRWYsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDL0M7WUFDRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUMxQjthQUFNO1lBQ0wsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDbEQsTUFBTSxDQUFDLE9BQU8sR0FBRztnQkFDZixHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7Z0JBQ2hCLFdBQVcsRUFBRSxPQUFPLENBQUMsV0FBVztnQkFDaEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO2FBQ3pCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN0QyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzthQUMxRDtZQUNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3hCO2FBQU07WUFDTCx5Q0FBeUM7WUFDekMsTUFBTSxDQUFDLE1BQU0sbUNBQ1IsQ0FBQyx1QkFBVyxDQUFDLElBQUksRUFBRSx1QkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FDdEQsTUFBTSxDQUNWLENBQUM7U0FDSDtRQUVELElBQUksUUFBUSxZQUFZLG9CQUFRLEVBQUU7WUFDaEMsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxnQkFBZ0IsWUFBWSxzQkFBUyxFQUFFO1lBQ3pDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztTQUM1QzthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsS0FBSyxDQUFDLElBQUksQ0FDUixPQUFnQixFQUNoQixNQUFjLEVBQ2QsT0FBZ0I7UUFFaEIsTUFBTSxhQUFhLEdBQUcsSUFBSSx3QkFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLGVBQWUsQ0FDbkIsTUFBNkIsRUFDN0IsTUFBZTtRQUVmLE1BQU0sRUFBRSxHQUFHLE1BQU0sWUFBWSxrQkFBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3JFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLEdBQUcsSUFBSSx1QkFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FDOUIsNkJBQVksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXpHRCx5QkF5R0MifQ==