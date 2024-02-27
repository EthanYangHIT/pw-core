import { Collector } from './collector';
import { Cell, Amount, OutPoint } from '..';
export class DummyCollector extends Collector {
    getBalance() {
        throw new Error('Method not implemented.');
    }
    // public collect(): CollectorResults {
    //   return [new Cell(new Amount('1000000'), this.address.toLockScript())];
    // }
    constructor() {
        super();
    }
    async collect(address) {
        const outPoint = new OutPoint('0x79221866125b9aff33c4303a6c35bde25d235e7e10025a86ca2a5d6ad657f51f', '0x0');
        const cell = new Cell(new Amount('1000000'), address.toLockScript(), null, outPoint);
        cell.validate();
        return [cell];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXktY29sbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3RvcnMvZHVtbXktY29sbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLElBQUksRUFBVyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBRXJELE1BQU0sT0FBTyxjQUFlLFNBQVEsU0FBUztJQUMzQyxVQUFVO1FBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCx1Q0FBdUM7SUFDdkMsMkVBQTJFO0lBQzNFLElBQUk7SUFDSjtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUNNLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBZ0I7UUFDbkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxRQUFRLENBQzNCLG9FQUFvRSxFQUNwRSxLQUFLLENBQ04sQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUNuQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFDckIsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUN0QixJQUFJLEVBQ0osUUFBUSxDQUNULENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDRiJ9