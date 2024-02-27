import { Provider, Platform } from './provider';
import { Address, AddressType } from '..';
import ENS from 'ethereum-ens';
export class EthProvider extends Provider {
    constructor(onAddressChanged) {
        super(Platform.eth);
        this.onAddressChanged = onAddressChanged;
    }
    async init() {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.autoRefreshOnNetworkChange = false;
            const accounts = await window.ethereum.enable();
            this.address = new Address(accounts[0], AddressType.eth);
            if (!!window.ethereum.on) {
                window.ethereum.on('accountsChanged', (newAccounts) => {
                    this.address = new Address(newAccounts[0], AddressType.eth);
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
            this.address = new Address(accounts[0], AddressType.eth);
            return this;
        }
        else {
            throw new Error('window.ethereum is undefined, Ethereum environment is required.');
        }
    }
    async ensResolver(ens) {
        try {
            return await new ENS(window.web3.currentProvider).resolver(ens).addr();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9ldGgtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDMUMsT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDO0FBRS9CLE1BQU0sT0FBTyxXQUFZLFNBQVEsUUFBUTtJQUV2QyxZQUFZLGdCQUFnRDtRQUMxRCxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDMUMsTUFBTSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsR0FBRyxLQUFLLENBQUM7WUFDbkQsTUFBTSxRQUFRLEdBQUcsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV6RCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtnQkFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxXQUFxQixFQUFFLEVBQUU7b0JBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDNUQsSUFBSSxDQUFDLENB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