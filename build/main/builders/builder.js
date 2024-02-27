"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const models_1 = require("../models");
const __1 = __importDefault(require(".."));
const FEE_BASE = 1000;
class Builder {
    constructor(feeRate = Builder.MIN_FEE_RATE, collector = __1.default.defaultCollector) {
        this.feeRate = feeRate;
        this.collector = collector;
    }
    static calcFee(tx, feeRate = Builder.MIN_FEE_RATE) {
        if (feeRate < Builder.MIN_FEE_RATE) {
            feeRate = Builder.MIN_FEE_RATE;
        }
        const txSize = tx.getSize();
        const fee = (feeRate / FEE_BASE) * txSize;
        return new models_1.Amount(fee.toString(), models_1.AmountUnit.shannon);
    }
    getFee() {
        return this.fee;
    }
}
exports.Builder = Builder;
Builder.MIN_FEE_RATE = 1000;
Builder.MIN_CHANGE = new models_1.Amount('61', models_1.AmountUnit.ckb);
Builder.WITNESS_ARGS = {
    Secp256k1: {
        lock: '0x' + '0'.repeat(130),
        input_type: '',
        output_type: '',
    },
    Secp256r1: {
        lock: '0x' + '0'.repeat(600),
        input_type: '',
        output_type: '',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsZGVycy9idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHNDQUE0RDtBQUM1RCwyQ0FBd0I7QUFFeEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBRXRCLE1BQXNCLE9BQU87SUE4QjNCLFlBQ1ksVUFBa0IsT0FBTyxDQUFDLFlBQVksRUFDdEMsWUFBdUIsV0FBTSxDQUFDLGdCQUFnQjtRQUQ5QyxZQUFPLEdBQVAsT0FBTyxDQUErQjtRQUN0QyxjQUFTLEdBQVQsU0FBUyxDQUFxQztJQUN2RCxDQUFDO0lBakJKLE1BQU0sQ0FBQyxPQUFPLENBQ1osRUFBZSxFQUNmLFVBQWtCLE9BQU8sQ0FBQyxZQUFZO1FBRXRDLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDbEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDaEM7UUFDRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQzFDLE9BQU8sSUFBSSxlQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQVNELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQzs7QUFyQ0gsMEJBd0NDO0FBdkNpQixvQkFBWSxHQUFHLElBQUksQ0FBQztBQUNwQixrQkFBVSxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxtQkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLG9CQUFZLEdBQUc7SUFDN0IsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUM1QixVQUFVLEVBQUUsRUFBRTtRQUNkLFdBQVcsRUFBRSxFQUFFO0tBQ2hCO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUM1QixVQUFVLEVBQUUsRUFBRTtRQUNkLFdBQVcsRUFBRSxFQUFFO0tBQ2hCO0NBQ0YsQ0FBQyJ9