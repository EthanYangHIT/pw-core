import { Script } from '.';
import PWCore, { ChainID } from '../core';
import { HashType } from '../interfaces';
// import { validators, transformers } from 'ckb-js-toolkit';
import { parseAddress, generateAddress, LumosConfigs, verifyCkbAddress, verifyEthAddress, } from '../utils';
import { fullPayloadToAddress, AddressType as AType, AddressPrefix as APrefix, } from '@nervosnetwork/ckb-sdk-utils';
export var AddressPrefix;
(function (AddressPrefix) {
    AddressPrefix[AddressPrefix["ckb"] = 0] = "ckb";
    AddressPrefix[AddressPrefix["ckt"] = 1] = "ckt";
})(AddressPrefix || (AddressPrefix = {}));
export var AddressType;
(function (AddressType) {
    AddressType[AddressType["ckb"] = 0] = "ckb";
    AddressType[AddressType["eth"] = 1] = "eth";
    // btc,
    // eos,
    // tron,
    // libra,
})(AddressType || (AddressType = {}));
export var LockType;
(function (LockType) {
    LockType[LockType["default"] = 0] = "default";
    LockType[LockType["multisig"] = 1] = "multisig";
    LockType[LockType["pw"] = 2] = "pw";
})(LockType || (LockType = {}));
export function getDefaultPrefix() {
    return PWCore.chainId === ChainID.ckb ? AddressPrefix.ckb : AddressPrefix.ckt;
}
export class Address {
    constructor(addressString, addressType) {
        this.addressString = addressString;
        this.addressType = addressType;
        this.addressString = addressString.toLowerCase();
    }
    static fromLockScript(lockScript, prefix = getDefaultPrefix()) {
        const addressString = generateAddress(lockScript.serializeJson(), {
            config: LumosConfigs[prefix],
        });
        return new Address(addressString, AddressType.ckb);
    }
    valid() {
        switch (this.addressType) {
            case AddressType.ckb:
                return verifyCkbAddress(this.addressString);
            case AddressType.eth:
                return verifyEthAddress(this.addressString);
            default:
                return true;
        }
    }
    toCKBAddress() {
        if (this.addressType === AddressType.ckb) {
            return this.addressString;
        }
        const { args, codeHash, hashType } = this.toLockScript();
        return fullPayloadToAddress({
            arg: args,
            codeHash,
            type: hashType === HashType.data ? AType.DataCodeHash : AType.TypeCodeHash,
            prefix: getDefaultPrefix() === AddressPrefix.ckb
                ? APrefix.Mainnet
                : APrefix.Testnet,
        });
    }
    toLockScript() {
        if (this.addressType !== AddressType.ckb) {
            const { codeHash, hashType } = PWCore.config.pwLock.script;
            return new Script(codeHash, this.addressString, hashType);
        }
        const lock = parseAddress(this.addressString, {
            config: LumosConfigs[getDefaultPrefix()],
        });
        return new Script(lock.code_hash, lock.args, HashType[lock.hash_type]);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBQzNCLE9BQU8sTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsNkRBQTZEO0FBQzdELE9BQU8sRUFDTCxZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEdBQ2pCLE1BQU0sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsV0FBVyxJQUFJLEtBQUssRUFDcEIsYUFBYSxJQUFJLE9BQU8sR0FDekIsTUFBTSw4QkFBOEIsQ0FBQztBQUV0QyxNQUFNLENBQU4sSUFBWSxhQUdYO0FBSEQsV0FBWSxhQUFhO0lBQ3ZCLCtDQUFHLENBQUE7SUFDSCwrQ0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLGFBQWEsS0FBYixhQUFhLFFBR3hCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FPWDtBQVBELFdBQVksV0FBVztJQUNyQiwyQ0FBRyxDQUFBO0lBQ0gsMkNBQUcsQ0FBQTtJQUNILE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7QUFDWCxDQUFDLEVBUFcsV0FBVyxLQUFYLFdBQVcsUUFPdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLDZDQUFPLENBQUE7SUFDUCwrQ0FBUSxDQUFBO0lBQ1IsbUNBQUUsQ0FBQTtBQUNKLENBQUMsRUFKVyxRQUFRLEtBQVIsUUFBUSxRQUluQjtBQUVELE1BQU0sVUFBVSxnQkFBZ0I7SUFDOUIsT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7QUFDaEYsQ0FBQztBQUVELE1BQU0sT0FBTyxPQUFPO0lBWWxCLFlBQ1csYUFBcUIsRUFDckIsV0FBd0I7UUFEeEIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFFakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQWhCRCxNQUFNLENBQUMsY0FBYyxDQUNuQixVQUFrQixFQUNsQixTQUF3QixnQkFBZ0IsRUFBRTtRQUUxQyxNQUFNLGFBQWEsR0FBRyxlQUFlLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ2hFLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDO1NBQzdCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBU0QsS0FBSztRQUNILFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixLQUFLLFdBQVcsQ0FBQyxHQUFHO2dCQUNsQixPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QyxLQUFLLFdBQVcsQ0FBQyxHQUFHO2dCQUNsQixPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM5QztnQkFDRSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7UUFFRCxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFekQsT0FBTyxvQkFBb0IsQ0FBQztZQUMxQixHQUFHLEVBQUUsSUFBSTtZQUNULFFBQVE7WUFDUixJQUFJLEVBQ0YsUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQ3RFLE1BQU0sRUFDSixnQkFBZ0IsRUFBRSxLQUFLLGFBQWEsQ0FBQyxHQUFHO2dCQUN0QyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ2pCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ3hDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQzNELE9BQU8sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0Q7UUFFRCxNQUFNLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM1QyxNQUFNLEVBQUUsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FDRiJ9