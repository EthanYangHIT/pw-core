"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PwCollector = void 0;
const axios_1 = __importDefault(require("axios"));
const collector_1 = require("./collector");
const __1 = require("..");
class PwCollector extends collector_1.Collector {
    constructor(apiBase) {
        super();
        this.apiBase = apiBase;
        this.apiBase = apiBase;
    }
    async getBalance(address) {
        const res = await axios_1.default.get(`${this.apiBase}/cell/getCapacityByLockHash?lockHash=${address.toLockScript().toHash()}`);
        return new __1.Amount(res.data.data, __1.AmountUnit.shannon);
    }
    async collect(address, neededAmount) {
        const cells = [];
        const res = await axios_1.default.get(`${this.apiBase}/cell/unSpent?lockHash=${address
            .toLockScript()
            .toHash()}&capacity=${neededAmount.toHexString()}`);
        for (let { capacity, outPoint } of res.data.data) {
            capacity = new __1.Amount(capacity, __1.AmountUnit.shannon);
            outPoint = new __1.OutPoint(outPoint.txHash, outPoint.index);
            cells.push(new __1.Cell(capacity, address.toLockScript(), null, outPoint));
        }
        return cells;
    }
}
exports.PwCollector = PwCollector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHctY29sbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3RvcnMvcHctY29sbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQiwyQ0FBd0M7QUFDeEMsMEJBQWlFO0FBRWpFLE1BQWEsV0FBWSxTQUFRLHFCQUFTO0lBQ3hDLFlBQW1CLE9BQWU7UUFDaEMsS0FBSyxFQUFFLENBQUM7UUFEUyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRWhDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQWdCO1FBQy9CLE1BQU0sR0FBRyxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FDekIsR0FDRSxJQUFJLENBQUMsT0FDUCx3Q0FBd0MsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQzFFLENBQUM7UUFDRixPQUFPLElBQUksVUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGNBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFnQixFQUFFLFlBQW9CO1FBQ2xELE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUV6QixNQUFNLEdBQUcsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQ3pCLEdBQ0UsSUFBSSxDQUFDLE9BQ1AsMEJBQTBCLE9BQU87YUFDOUIsWUFBWSxFQUFFO2FBQ2QsTUFBTSxFQUFFLGFBQWEsWUFBWSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQ3JELENBQUM7UUFFRixLQUFLLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDaEQsUUFBUSxHQUFHLElBQUksVUFBTSxDQUFDLFFBQVEsRUFBRSxjQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsUUFBUSxHQUFHLElBQUksWUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pELEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUN4RTtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGO0FBbENELGtDQWtDQyJ9