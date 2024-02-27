"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const __1 = __importStar(require(".."));
const dummy_collector_1 = require("../collectors/dummy-collector");
const dummy_provider_1 = require("../providers/dummy-provider");
const test = ava_1.default;
const outPoint1 = new __1.OutPoint('0x85f2eb3737f79af418361e6c6c03a5d9f0060b085a888c0c70d762842af1b6c1', '0x1');
const outPoint2 = new __1.OutPoint('0x79221866125b9aff33c4303a6c35bde25d235e7e10025a86ca2a5d6ad657f51f', '0x0');
const outPoint3 = new __1.OutPoint('0x79221866125b9aff33c4303a6c35bde25d235e7e10025a86ca2a5d6ad657f51f', '0x1');
const outPoint4 = new __1.OutPoint('0xf8de3bb47d055cdf460d93a2a6e1b05f7432f9777c8c474abf4eec1d4aee5d37', '0x0');
test.before(async (t) => {
    const pw = new __1.default('https://aggron.ckb.dev');
    await pw.init(new dummy_provider_1.DummyProvider(), new dummy_collector_1.DummyCollector(), __1.ChainID.ckb_testnet);
    const cells = await Promise.all([
        __1.Cell.loadFromBlockchain(pw.rpc, outPoint1),
        __1.Cell.loadFromBlockchain(pw.rpc, outPoint2),
        __1.Cell.loadFromBlockchain(pw.rpc, outPoint3),
    ]);
    const inputs = [cells[0]];
    const outputs = cells.slice(1);
    const cellDeps = [new __1.CellDep(__1.DepType.depGroup, outPoint4)];
    t.context.raw = new __1.RawTransaction(inputs, outputs, cellDeps);
});
test('validate', (t) => {
    t.notThrows(() => t.context.raw.validate());
});
test('toHash', (t) => {
    t.is(t.context.raw.toHash(), '0x79221866125b9aff33c4303a6c35bde25d235e7e10025a86ca2a5d6ad657f51f');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LXRyYW5zYWN0aW9uLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL3Jhdy10cmFuc2FjdGlvbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3Qyx3Q0FPWTtBQUNaLG1FQUErRDtBQUMvRCxnRUFBNEQ7QUFFNUQsTUFBTSxJQUFJLEdBQUcsYUFBaUQsQ0FBQztBQUUvRCxNQUFNLFNBQVMsR0FBRyxJQUFJLFlBQVEsQ0FDNUIsb0VBQW9FLEVBQ3BFLEtBQUssQ0FDTixDQUFDO0FBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxZQUFRLENBQzVCLG9FQUFvRSxFQUNwRSxLQUFLLENBQ04sQ0FBQztBQUNGLE1BQU0sU0FBUyxHQUFHLElBQUksWUFBUSxDQUM1QixvRUFBb0UsRUFDcEUsS0FBSyxDQUNOLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRyxJQUFJLFlBQVEsQ0FDNUIsb0VBQW9FLEVBQ3BFLEtBQUssQ0FDTixDQUFDO0FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxXQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNoRCxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSw4QkFBYSxFQUFFLEVBQUUsSUFBSSxnQ0FBYyxFQUFFLEVBQUUsV0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLE1BQU0sS0FBSyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUM5QixRQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7UUFDMUMsUUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO1FBQzFDLFFBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztLQUMzQyxDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFdBQU8sQ0FBQyxXQUFPLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFNUQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxrQkFBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDckIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ25CLENBQUMsQ0FBQyxFQUFFLENBQ0YsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQ3RCLG9FQUFvRSxDQUNyRSxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==