"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amount = exports.AmountUnit = void 0;
const jsbi_1 = __importDefault(require("jsbi"));
const utils_1 = require("../utils");
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
var AmountUnit;
(function (AmountUnit) {
    AmountUnit[AmountUnit["ckb"] = 0] = "ckb";
    AmountUnit[AmountUnit["shannon"] = 1] = "shannon";
})(AmountUnit = exports.AmountUnit || (exports.AmountUnit = {}));
class Amount {
    constructor(amount, unit = AmountUnit.ckb) {
        if (Number.isNaN(amount)) {
            throw new Error(`Amount ${amount} is not a valid ${AmountUnit[unit]} value`);
        }
        amount = `${amount}`;
        if (amount.startsWith('0x')) {
            amount = ckb_js_toolkit_1.HexStringToBigInt(amount).toString();
        }
        if (unit === AmountUnit.shannon) {
            try {
                amount = amount.match(/^0*(\d*)$/)[1];
                if (amount === '') {
                    amount = '0';
                }
            }
            catch (e) {
                throw new Error(`Amount ${amount} is not a valid ${unit} value`);
            }
        }
        else if (unit !== AmountUnit.ckb) {
            throw new Error(`Invalid unit ${unit}`);
        }
        this.amount = amount;
        this.unit = unit;
    }
    add(val) {
        const res = jsbi_1.default.add(this.toBigInt(), val.toBigInt()).toString();
        return new Amount(res, AmountUnit.shannon);
    }
    sub(val) {
        const res = jsbi_1.default.subtract(this.toBigInt(), val.toBigInt()).toString();
        return new Amount(res, AmountUnit.shannon);
    }
    mul(val) {
        const res = jsbi_1.default.divide(jsbi_1.default.multiply(this.toBigInt(), val.toBigInt()), jsbi_1.default.BigInt(utils_1.BASE)).toString();
        return new Amount(res, AmountUnit.shannon);
    }
    gt(val) {
        return jsbi_1.default.GT(this.toBigInt(), val.toBigInt());
    }
    gte(val) {
        return jsbi_1.default.greaterThanOrEqual(this.toBigInt(), val.toBigInt());
    }
    lt(val) {
        return jsbi_1.default.LT(this.toBigInt(), val.toBigInt());
    }
    lte(val) {
        return jsbi_1.default.lessThanOrEqual(this.toBigInt(), val.toBigInt());
    }
    eq(val) {
        return jsbi_1.default.EQ(this.toBigInt(), val.toBigInt());
    }
    toString(unit = AmountUnit.ckb, options) {
        if (unit === AmountUnit.shannon) {
            return this.unit === AmountUnit.shannon
                ? this.amount
                : utils_1.ckbToShannon(this.amount);
        }
        else if (unit === AmountUnit.ckb) {
            return utils_1.shannonToCKB(this.unit === AmountUnit.shannon
                ? this.amount
                : utils_1.ckbToShannon(this.amount), options);
        }
        throw new Error(`${unit} is not a valid unit`);
    }
    toBigInt() {
        if (this.unit === AmountUnit.ckb) {
            return jsbi_1.default.BigInt(this.toString(AmountUnit.shannon));
        }
        return jsbi_1.default.BigInt(this.amount);
    }
    toHexString() {
        return `0x${this.toBigInt().toString(16)}`;
    }
}
exports.Amount = Amount;
Amount.ZERO = new Amount('0');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1vdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9hbW91bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLG9DQUE0RDtBQUM1RCxtREFBbUQ7QUFFbkQsSUFBWSxVQUdYO0FBSEQsV0FBWSxVQUFVO0lBQ3BCLHlDQUFHLENBQUE7SUFDSCxpREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBU0QsTUFBYSxNQUFNO0lBNENqQixZQUFZLE1BQWMsRUFBRSxPQUFtQixVQUFVLENBQUMsR0FBRztRQUMzRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FDYixVQUFVLE1BQU0sbUJBQW1CLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUM1RCxDQUFDO1NBQ0g7UUFFRCxNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUVyQixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsTUFBTSxHQUFHLGtDQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9DO1FBRUQsSUFBSSxJQUFJLEtBQUssVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUMvQixJQUFJO2dCQUNGLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7b0JBQ2pCLE1BQU0sR0FBRyxHQUFHLENBQUM7aUJBQ2Q7YUFDRjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxNQUFNLG1CQUFtQixJQUFJLFFBQVEsQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7YUFBTSxJQUFJLElBQUks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