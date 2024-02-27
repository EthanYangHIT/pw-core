import { Provider, Platform } from './provider';
import { Address, AddressType } from '..';
export class DummyProvider extends Provider {
    sign(message) {
        console.log('message', message);
        throw new Error('Method not implemented.');
    }
    constructor(platform = Platform.eth) {
        super(platform);
    }
    async init() {
        if (this.platform === Platform.eth) {
            this.address = new Address('0x26C5F390FF2033CbB44377361c63A3Dd2DE3121d', AddressType.eth);
        }
        else {
            this.address = new Address('ckt1qyqxpayn272n8km2k08hzldynj992egs0waqnr8zjs', AddressType.ckb);
        }
        return this;
    }
    async close() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXktcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL2R1bW15LXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBRTFDLE1BQU0sT0FBTyxhQUFjLFNBQVEsUUFBUTtJQUN6QyxJQUFJLENBQUMsT0FBZTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELFlBQVksV0FBcUIsUUFBUSxDQUFDLEdBQUc7UUFDM0MsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxLQUFLLENBQUMsSUFBSTtRQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQ3hCLDRDQUE0QyxFQUM1QyxXQUFXLENBQUMsR0FBRyxDQUNoQixDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQ3hCLGdEQUFnRCxFQUNoRCxXQUFXLENBQUMsR0FBRyxDQUNoQixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxLQUFLLENBQUMsS0FBSyxLQUFJLENBQUM7Q0FDakIifQ==