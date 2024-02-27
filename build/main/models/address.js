"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = exports.getDefaultPrefix = exports.LockType = exports.AddressType = exports.AddressPrefix = void 0;
const _1 = require(".");
const core_1 = __importStar(require("../core"));
const interfaces_1 = require("../interfaces");
// import { validators, transformers } from 'ckb-js-toolkit';
const utils_1 = require("../utils");
const ckb_sdk_utils_1 = require("@nervosnetwork/ckb-sdk-utils");
var AddressPrefix;
(function (AddressPrefix) {
    AddressPrefix[AddressPrefix["ckb"] = 0] = "ckb";
    AddressPrefix[AddressPrefix["ckt"] = 1] = "ckt";
})(AddressPrefix = exports.AddressPrefix || (exports.AddressPrefix = {}));
var AddressType;
(function (AddressType) {
    AddressType[AddressType["ckb"] = 0] = "ckb";
    AddressType[AddressType["eth"] = 1] = "eth";
    // btc,
    // eos,
    // tron,
    // libra,
})(AddressType = exports.AddressType || (exports.AddressType = {}));
var LockType;
(function (LockType) {
    LockType[LockType["default"] = 0] = "default";
    LockType[LockType["multisig"] = 1] = "multisig";
    LockType[LockType["pw"] = 2] = "pw";
})(LockType = exports.LockType || (exports.LockType = {}));
function getDefaultPrefix() {
    return core_1.default.chainId === core_1.ChainID.ckb ? AddressPrefix.ckb : AddressPrefix.ckt;
}
exports.getDefaultPrefix = getDefaultPrefix;
class Address {
    constructor(addressString, addressType) {
        this.addressString = addressString;
        this.addressType = addressType;
        this.addressString = addressString.toLowerCase();
    }
    static fromLockScript(lockScript, prefix = getDefaultPrefix()) {
        const addressString = utils_1.generateAddress(lockScript.serializeJson(), {
            config: utils_1.LumosConfigs[prefix],
        });
        return new Address(addressString, AddressType.ckb);
    }
    valid() {
        switch (this.addressType) {
            case AddressType.ckb:
                return utils_1.verifyCkbAddress(this.addressString);
            case AddressType.eth:
                return utils_1.verifyEthAddress(this.addressString);
            default:
                return true;
        }
    }
    toCKBAddress() {
        if (this.addressType === AddressType.ckb) {
            return this.addressString;
        }
        const { args, codeHash, hashType } = this.toLockScript();
        return ckb_sdk_utils_1.fullPayloadToAddress({
            arg: args,
            codeHash,
            type: hashType === interfaces_1.HashType.data ? ckb_sdk_utils_1.AddressType.DataCodeHash : ckb_sdk_utils_1.AddressType.TypeCodeHash,
            prefix: getDefaultPrefix() === AddressPrefix.ckb
                ? ckb_sdk_utils_1.AddressPrefix.Mainnet
                : ckb_sdk_utils_1.AddressPrefix.Testnet,
        });
    }
    toLockScript() {
        if (this.addressType !== AddressType.ckb) {
            const { codeHash, hashType } = core_1.default.config.pwLock.script;
            return new _1.Script(codeHash, this.addressString, hashType);
        }
        const lock = utils_1.parseAddress(this.addressString, {
            config: utils_1.LumosConfigs[getDefaultPrefix()],
        });
        return new _1.Script(lock.code_hash, lock.args, interfaces_1.HashType[lock.hash_type]);
    }
}
exports.Address = Address;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0JBQTJCO0FBQzNCLGdEQUEwQztBQUMxQyw4Q0FBeUM7QUFDekMsNkRBQTZEO0FBQzdELG9DQU1rQjtBQUNsQixnRUFJc0M7QUFFdEMsSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLCtDQUFHLENBQUE7SUFDSCwrQ0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBR3hCO0FBRUQsSUFBWSxXQU9YO0FBUEQsV0FBWSxXQUFXO0lBQ3JCLDJDQUFHLENBQUE7SUFDSCwyQ0FBRyxDQUFBO0lBQ0gsT0FBTztJQUNQLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztBQUNYLENBQUMsRUFQVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQU90QjtBQUVELElBQVksUUFJWDtBQUpELFdBQVksUUFBUTtJQUNsQiw2Q0FBTyxDQUFBO0lBQ1AsK0NBQVEsQ0FBQTtJQUNSLG1DQUFFLENBQUE7QUFDSixDQUFDLEVBSlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFJbkI7QUFFRCxTQUFnQixnQkFBZ0I7SUFDOUIsT0FBTyxjQUFNLENBQUMsT0FBTyxLQUFLLGNBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7QUFDaEYsQ0FBQztBQUZELDRDQUVDO0FBRUQsTUFBYSxPQUFPO0lBWWxCLFlBQ1csYUFBcUIsRUFDckIsV0FBd0I7UUFEeEIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQWhCRCxNQUFNLENBQUMsY0FBYyxDQUNuQixVQUFrQixFQUNsQixTQUF3QixnQkFBZ0IsRUFBRTtRQUUxQyxNQUFNLGFBQWEsR0FBRyx1QkFBZSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUNoRSxNQUFNLEVBQUUsb0JBQVksQ0FBQyxNQUFNLENBQUM7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFTRCxLQUFLO1FBQ0gsUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ2xCLE9BQU8sd0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzlDLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ2xCLE9BQU8sd0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzlDO2dCQUNFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUMzQjtRQUVELE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV6RCxPQUFPLG9DQUFvQixDQUFDO1lBQzFCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsUUFBUTtZQUNSLElBQUksRUFDRixRQUFRLEtBQUsscUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDJCQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQywyQkFBSyxDQUFDLFlBQVk7WUFDdEUsTUFBTSxFQUNKLGdCQUFnQixFQUFFLEtBQUssYUFBYSxDQUFDLEdBQUc7Z0JBQ3RDLENBQUMsQ0FBQyw2QkFBTyxDQUFDLE9BQU87Z0JBQ2pCLENBQUMsQ0FBQyw2QkFBTyxDQUFDLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUN4QyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLGNBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUMzRCxPQUFPLElBQUksU0FBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsTUFBTSxJQUFJLEdBQUcsb0JBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQzVDLE1BQU0sRUFBRSxvQkFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLFNBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUscUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBQ0Y7QUE1REQsMEJBNERDIn0=