"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web3ModalProvider = void 0;
const provider_1 = require("./provider");
const models_1 = require("../models");
const ethereum_ens_1 = __importDefault(require("ethereum-ens"));
// import Web3 from 'web3';
const utils_1 = require("../utils");
class Web3ModalProvider extends provider_1.Provider {
    constructor(web3, onAddressChanged) {
        super(provider_1.Platform.eth);
        this.web3 = web3;
        this.onAddressChanged = onAddressChanged;
    }
    async init() {
        const accounts = await this.web3.eth.getAccounts();
        if (!utils_1.verifyEthAddress(accounts[0])) {
            throw new Error('get ethereum address failed');
        }
        this.address = new models_1.Address(accounts[0], models_1.AddressType.eth);
        if (this.web3.currentProvider.on) {
            this.web3.currentProvider.on('accountsChanged', async (newAccounts) => {
                this.address = new models_1.Address(newAccounts[0], models_1.AddressType.eth);
                this.onAddressChanged(this.address);
            });
        }
        return this;
    }
    async ensResolver(ens) {
        try {
            return await new ethereum_ens_1.default(this.web3.currentProvider).resolver(ens).addr();
        }
        catch (e) {
            return 'Unknown ENS Name';
        }
    }
    async sign(message) {
        let result = await this.web3.eth.personal.sign(message, this.address.addressString, null);
        let v = Number.parseInt(result.slice(-2), 16);
        if (v >= 27)
            v -= 27;
        result = result.slice(0, -2) + v.toString(16).padStart(2, '0');
        return result;
    }
    async close() {
        if (this.web3 &&
            this.web3.currentProvider &&
            this.web3.currentProvider.close) {
            await this.web3.currentProvider.close();
        }
    }
}
exports.Web3ModalProvider = Web3ModalProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViM21vZGFsLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy93ZWIzbW9kYWwtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUNBQWdEO0FBQ2hELHNDQUFpRDtBQUNqRCxnRUFBK0I7QUFDL0IsMkJBQTJCO0FBQzNCLG9DQUE0QztBQUU1QyxNQUFhLGlCQUFrQixTQUFRLG1CQUFRO0lBRzdDLFlBQ1csSUFBUyxFQUNsQixnQkFBZ0Q7UUFFaEQsS0FBSyxDQUFDLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFIWCxTQUFJLEdBQUosSUFBSSxDQUFLO1FBSWxCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyx3QkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0JBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQzFCLGlCQUFpQixFQUNqQixLQUFLLEVBQUUsV0FBcUIsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0JBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsb0JBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQ0YsQ0FBQztTQUNIO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFXO1FBQzNCLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxzQkFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RFO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLGtCQUFrQixDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBZTtRQUN4QixJQUFJLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzVDLE9BQU8sRUFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsSUFBSSxDQUNMLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFL0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFDRSxJQUFJLENBQUMsSUFBSTtZQUNULElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZTtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQy9CO1lBQ0EsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7Q0FDRjtBQTlERCw4Q0E4REMifQ==