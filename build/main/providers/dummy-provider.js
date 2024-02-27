"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyProvider = void 0;
const provider_1 = require("./provider");
const __1 = require("..");
class DummyProvider extends provider_1.Provider {
    sign(message) {
        console.log('message', message);
        throw new Error('Method not implemented.');
    }
    constructor(platform = provider_1.Platform.eth) {
        super(platform);
    }
    async init() {
        if (this.platform === provider_1.Platform.eth) {
            this.address = new __1.Address('0x26C5F390FF2033CbB44377361c63A3Dd2DE3121d', __1.AddressType.eth);
        }
        else {
            this.address = new __1.Address('ckt1qyqxpayn272n8km2k08hzldynj992egs0waqnr8zjs', __1.AddressType.ckb);
        }
        return this;
    }
    async close() { }
}
exports.DummyProvider = DummyProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXktcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL2R1bW15LXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFnRDtBQUNoRCwwQkFBMEM7QUFFMUMsTUFBYSxhQUFjLFNBQVEsbUJBQVE7SUFDekMsSUFBSSxDQUFDLE9BQWU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxZQUFZLFdBQXFCLG1CQUFRLENBQUMsR0FBRztRQUMzQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUNELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLG1CQUFRLENBQUMsR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFPLENBQ3hCLDRDQUE0QyxFQUM1QyxlQUFXLENBQUMsR0FBRyxDQUNoQixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFPLENBQ3hCLGdEQUFnRCxFQUNoRCxlQUFXLENBQUMsR0FBRyxDQUNoQixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxLQUFLLENBQUMsS0FBSyxLQUFJLENBQUM7Q0FDakI7QUF2QkQsc0NBdUJDIn0=