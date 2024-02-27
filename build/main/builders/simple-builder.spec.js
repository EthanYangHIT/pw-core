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
const _1 = require(".");
const dummy_collector_1 = require("../collectors/dummy-collector");
const dummy_provider_1 = require("../providers/dummy-provider");
const test = ava_1.default;
test.before(async (t) => {
    const address = new __1.Address('ckt1qyqxpayn272n8km2k08hzldynj992egs0waqnr8zjs', __1.AddressType.ckb);
    const amount = new __1.Amount('100');
    await new __1.default('https://aggron.ckb.dev').init(new dummy_provider_1.DummyProvider(), new dummy_collector_1.DummyCollector(), __1.ChainID.ckb_testnet);
    t.context.builder = new _1.SimpleBuilder(address, amount);
});
test('build a tx', async (t) => {
    const tx = await t.context.builder.build();
    t.notThrows(() => tx.validate());
});
test.todo('calc fee');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWJ1aWxkZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsZGVycy9zaW1wbGUtYnVpbGRlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3Qyx3Q0FBbUU7QUFDbkUsd0JBQWtDO0FBQ2xDLG1FQUErRDtBQUMvRCxnRUFBNEQ7QUFFNUQsTUFBTSxJQUFJLEdBQUcsYUFBb0QsQ0FBQztBQUVsRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLFdBQU8sQ0FDekIsZ0RBQWdELEVBQ2hELGVBQVcsQ0FBQyxHQUFHLENBQ2hCLENBQUM7SUFDRixNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQyxNQUFNLElBQUksV0FBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUM3QyxJQUFJLDhCQUFhLEVBQUUsRUFDbkIsSUFBSSxnQ0FBYyxFQUFFLEVBQ3BCLFdBQU8sQ0FBQyxXQUFXLENBQ3BCLENBQUM7SUFFRixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLGdCQUFhLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDN0IsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyJ9