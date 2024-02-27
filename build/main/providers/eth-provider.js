"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthProvider = void 0;
const provider_1 = require("./provider");
const __1 = require("..");
const ethereum_ens_1 = __importDefault(require("ethereum-ens"));
class EthProvider extends provider_1.Provider {
    constructor(onAddressChanged) {
        super(provider_1.Platform.eth);
        this.onAddressChanged = onAddressChanged;
    }
    async init() {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.autoRefreshOnNetworkChange = false;
            const accounts = await window.ethereum.enable();
            this.address = new __1.Address(accounts[0], __1.AddressType.eth);
            if (!!window.ethereum.on) {
                window.ethereum.on('accountsChanged', (newAccounts) => {
                    this.address = new __1.Address(newAccounts[0], __1.AddressType.eth);
                    if (!!this.onAddressChanged) {
                        this.onAddressChanged(this.address);
                    }
                });
            }
            return this;
        }
        else if (!!window.web3) {
            console.log('[eth-provider] try window.web3');
            const accounts = await new Promise((resolve, reject) => {
                window.web3.eth.getAccounts((err, result) => {
                    if (!!err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
            this.address = new __1.Address(accounts[0], __1.AddressType.eth);
            return this;
        }
        else {
            throw new Error('window.ethereum is undefined, Ethereum environment is required.');
        }
    }
    async ensResolver(ens) {
        try {
            return await new ethereum_ens_1.default(window.web3.currentProvider).resolver(ens).addr();
        }
        catch (e) {
            return 'Unknown ENS Name';
        }
    }
    async sign(message) {
        return new Promise((resolve, reject) => {
            const from = this.address.addressString;
            const params = [message, from];
            const method = 'personal_sign';
            window.web3.currentProvider.sendAsync({ method, params, from }, (err, result) => {
                if (err) {
                    reject(err);
                }
                if (result.error) {
                    reject(result.error);
                }
                result = result.result;
                let v = Number.parseInt(result.slice(-2), 16);
                if (v >= 27)
                    v -= 27;
                result = result.slice(0, -2) + v.toString(16).padStart(2, '0');
                resolve(result);
            });
        });
    }
    async close() { }
}
exports.EthProvider = EthProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9ldGgtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUNBQWdEO0FBQ2hELDBCQUEwQztBQUMxQyxnRUFBK0I7QUFFL0IsTUFBYSxXQUFZLFNBQVEsbUJBQVE7SUFFdkMsWUFBWSxnQkFBZ0Q7UUFDMUQsS0FBSyxDQUFDLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzNDLENBQUM7SUFDRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUMxQyxNQUFNLENBQUMsUUFBUSxDQUFDLDBCQUEwQixHQUFHLEtBQUssQ0FBQztZQUNuRCxNQUFNLFFBQVEsR0FBRyxNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXpELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFdBQXFCLEVBQUUsRUFBRTtvQkFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7d0JBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3JDO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO29CQUMxQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUU7d0JBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNiO29CQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV6RCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUNiLGlFQUFpRSxDQUNsRSxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFXO1FBQzNCLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLGtCQUFrQixDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZTtRQUN4QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ3hDLE1BQU0sTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQy9CLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQztZQUUvQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQ25DLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFDeEIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ2QsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNiO2dCQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUssS0FBSSxDQUFDO0NBQ2pCO0FBNUVELGtDQTRFQyJ9