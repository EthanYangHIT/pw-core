"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSigner = void 0;
const _1 = require(".");
const hashers_1 = require("../hashers");
class DefaultSigner extends _1.Signer {
    constructor(provider) {
        super(new hashers_1.Keccak256Hasher());
        this.provider = provider;
    }
    async signMessages(messages) {
        return [await this.provider.sign(messages[0].message)];
    }
}
exports.DefaultSigner = DefaultSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zaWduZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2lnbmVycy9kZWZhdWx0LXNpZ25lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3QkFBb0M7QUFDcEMsd0NBQTZDO0FBRzdDLE1BQWEsYUFBYyxTQUFRLFNBQU07SUFDdkMsWUFBNEIsUUFBa0I7UUFDNUMsS0FBSyxDQUFDLElBQUkseUJBQWUsRUFBRSxDQUFDLENBQUM7UUFESCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRTlDLENBQUM7SUFFRCxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQW1CO1FBQ3BDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQVJELHNDQVFDIn0=