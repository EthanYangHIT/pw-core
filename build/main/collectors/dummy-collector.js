"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyCollector = void 0;
const collector_1 = require("./collector");
const __1 = require("..");
class DummyCollector extends collector_1.Collector {
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
        const outPoint = new __1.OutPoint('0x79221866125b9aff33c4303a6c35bde25d235e7e10025a86ca2a5d6ad657f51f', '0x0');
        const cell = new __1.Cell(new __1.Amount('1000000'), address.toLockScript(), null, outPoint);
        cell.validate();
        return [cell];
    }
}
exports.DummyCollector = DummyCollector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXktY29sbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3RvcnMvZHVtbXktY29sbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3QztBQUN4QywwQkFBcUQ7QUFFckQsTUFBYSxjQUFlLFNBQVEscUJBQVM7SUFDM0MsVUFBVTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsdUNBQXVDO0lBQ3ZDLDJFQUEyRTtJQUMzRSxJQUFJO0lBQ0o7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7SUFDTSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQWdCO1FBQ25DLE1BQU0sUUFBUSxHQUFHLElBQUksWUFBUSxDQUMzQixvRUFBb0UsRUFDcEUsS0FBSyxDQUNOLENBQUM7UUFDRixNQUFNLElBQUksR0FBRyxJQUFJLFFBQUksQ0FDbkIsSUFBSSxVQUFNLENBQUMsU0FBUyxDQUFDLEVBQ3JCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFDdEIsSUFBSSxFQUNKLFFBQVEsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUF4QkQsd0NBd0JDIn0=