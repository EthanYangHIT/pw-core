"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleBuilder = void 0;
const builder_1 = require("../builders/builder");
const models_1 = require("../models");
const __1 = __importDefault(require(".."));
class SimpleBuilder extends builder_1.Builder {
    constructor(address, amount, feeRate, collector) {
        super(feeRate, collector);
        this.address = address;
        this.amount = amount;
    }
    async build(fee = models_1.Amount.ZERO) {
        const outputCell = new models_1.Cell(this.amount, this.address.toLockScript());
        const neededAmount = this.amount.add(builder_1.Builder.MIN_CHANGE).add(fee);
        let inputSum = new models_1.Amount('0');
        const inputCells = [];
        // fill the inputs
        const cells = await this.collector.collect(__1.default.provider.address, neededAmount);
        for (const cell of cells) {
            inputCells.push(cell);
            inputSum = inputSum.add(cell.capacity);
            if (inputSum.gt(neededAmount))
                break;
        }
        if (inputSum.lt(neededAmount)) {
            throw new Error(`input capacity not enough, need ${neededAmount.toString(models_1.AmountUnit.ckb)}, got ${inputSum.toString(models_1.AmountUnit.ckb)}`);
        }
        const changeCell = new models_1.Cell(inputSum.sub(outputCell.capacity), __1.default.provider.address.toLockScript());
        const tx = new models_1.Transaction(new models_1.RawTransaction(inputCells, [outputCell, changeCell]), [builder_1.Builder.WITNESS_ARGS.Secp256k1]);
        this.fee = builder_1.Builder.calcFee(tx, this.feeRate);
        if (changeCell.capacity.gte(builder_1.Builder.MIN_CHANGE.add(this.fee))) {
            changeCell.capacity = changeCell.capacity.sub(this.fee);
            tx.raw.outputs.pop();
            tx.raw.outputs.push(changeCell);
            return tx;
        }
        return this.build(this.fee);
    }
    getCollector() {
        return this.collector;
    }
}
exports.SimpleBuilder = SimpleBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnVpbGRlcnMvc2ltcGxlLWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaURBQThDO0FBRTlDLHNDQU9tQjtBQUNuQiwyQ0FBd0I7QUFFeEIsTUFBYSxhQUFjLFNBQVEsaUJBQU87SUFDeEMsWUFDVSxPQUFnQixFQUNoQixNQUFjLEVBQ3RCLE9BQWdCLEVBQ2hCLFNBQXFCO1FBRXJCLEtBQUssQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFMbEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFRO0lBS3hCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQWMsZUFBTSxDQUFDLElBQUk7UUFDbkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxhQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7UUFDdEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsTUFBTSxVQUFVLEdBQVcsRUFBRSxDQUFDO1FBRTlCLGtCQUFrQjtRQUNsQixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUN4QyxXQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFDdkIsWUFBWSxDQUNiLENBQUM7UUFDRixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxJQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUFFLE1BQU07U0FDdEM7UUFFRCxJQUFJLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FDYixtQ0FBbUMsWUFBWSxDQUFDLFFBQVEsQ0FDdEQsbUJBQVUsQ0FBQyxHQUFHLENBQ2YsU0FBUyxRQUFRLENBQUMsUUFBUSxDQUFDLG1CQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDOUMsQ0FBQztTQUNIO1FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxhQUFJLENBQ3pCLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUNqQyxXQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FDdkMsQ0FBQztRQUVGLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVcsQ0FDeEIsSUFBSSx1QkFBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxFQUN4RCxDQUFDLGlCQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUNqQyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzdELFVBQVUsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUE1REQsc0NBNERDIn0=