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
const builders_1 = require("../builders");
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
    t.context.tx = new __1.Transaction(new __1.RawTransaction(inputs, outputs, cellDeps), [builders_1.Builder.WITNESS_ARGS.Secp256k1]);
});
test('validate', (t) => {
    t.notThrows(() => t.context.tx.validate());
});
test.todo('getsize');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdHJhbnNhY3Rpb24uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0Msd0NBUVk7QUFDWixtRUFBK0Q7QUFDL0QsZ0VBQTREO0FBQzVELDBDQUFzQztBQUV0QyxNQUFNLElBQUksR0FBRyxhQUE2QyxDQUFDO0FBRTNELE1BQU0sU0FBUyxHQUFHLElBQUksWUFBUSxDQUM1QixvRUFBb0UsRUFDcEUsS0FBSyxDQUNOLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRyxJQUFJLFlBQVEsQ0FDNUIsb0VBQW9FLEVBQ3BFLEtBQUssQ0FDTixDQUFDO0FBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxZQUFRLENBQzVCLG9FQUFvRSxFQUNwRSxLQUFLLENBQ04sQ0FBQztBQUNGLE1BQU0sU0FBUyxHQUFHLElBQUksWUFBUSxDQUM1QixvRUFBb0UsRUFDcEUsS0FBSyxDQUNOLENBQUM7QUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN0QixNQUFNLEVBQUUsR0FBRyxJQUFJLFdBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLDhCQUFhLEVBQUUsRUFBRSxJQUFJLGdDQUFjLEVBQUUsRUFBRSxXQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFOUUsTUFBTSxLQUFLLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzlCLFFBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztRQUMxQyxRQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7UUFDMUMsUUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO0tBQzNDLENBQUMsQ0FBQztJQUVILE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksV0FBTyxDQUFDLFdBQU8sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUU1RCxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLGVBQVcsQ0FDNUIsSUFBSSxrQkFBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQzdDLENBQUMsa0JBQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQ2pDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNyQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=