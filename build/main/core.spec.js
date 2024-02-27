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
const _1 = __importStar(require("."));
const pw_collector_1 = require("./collectors/pw-collector");
const constants_1 = require("./constants");
const dummy_provider_1 = require("./providers/dummy-provider");
const test = ava_1.default;
test.before(async (t) => {
    const address = new _1.Address('0x26C5F390FF2033CbB44377361c63A3Dd2DE3121d', _1.AddressType.eth);
    const pw = await new _1.default('https://lay2.ckb.dev').init(new dummy_provider_1.DummyProvider(), new pw_collector_1.PwCollector('https://cellapi.ckb.pw'), _1.ChainID.ckb_dev, constants_1.CHAIN_SPECS.Lay2);
    t.context = { pw, address };
});
test.skip('send simple tx', async (t) => {
    // test.serial('send simple tx', async (t) => {
    const { pw, address } = t.context;
    const amount61 = new _1.Amount('61');
    const txHash = await pw.send(address, amount61);
    t.pass('tx sent: ' + txHash);
});
test.serial('chain specs auto select', async (t) => {
    await new _1.default('https://lina.ckb.dev').init(new dummy_provider_1.DummyProvider(), new pw_collector_1.PwCollector('https://cellapi.ckb.pw'));
    t.is(_1.default.chainId, _1.ChainID.ckb);
    await new _1.default('https://aggron.ckb.dev').init(new dummy_provider_1.DummyProvider(), new pw_collector_1.PwCollector('https://cellapi.ckb.pw'));
    t.is(_1.default.chainId, _1.ChainID.ckb_testnet);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvcmUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0Msc0NBQWtFO0FBQ2xFLDREQUF3RDtBQUN4RCwyQ0FBMEM7QUFDMUMsK0RBQTJEO0FBRTNELE1BQU0sSUFBSSxHQUFHLGFBQTBELENBQUM7QUFFeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxVQUFPLENBQ3pCLDRDQUE0QyxFQUM1QyxjQUFXLENBQUMsR0FBRyxDQUNoQixDQUFDO0lBQ0YsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFJLFVBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FDdEQsSUFBSSw4QkFBYSxFQUFFLEVBQ25CLElBQUksMEJBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUN6QyxVQUFPLENBQUMsT0FBTyxFQUNmLHVCQUFXLENBQUMsSUFBSSxDQUNqQixDQUFDO0lBQ0YsQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3RDLCtDQUErQztJQUMvQyxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxTQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUMvQixDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ2pELE1BQU0sSUFBSSxVQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQzNDLElBQUksOEJBQWEsRUFBRSxFQUNuQixJQUFJLDBCQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FDMUMsQ0FBQztJQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEMsTUFBTSxJQUFJLFVBQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FDN0MsSUFBSSw4QkFBYSxFQUFFLEVBQ25CLElBQUksMEJBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUMxQyxDQUFDO0lBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFNLENBQUMsT0FBTyxFQUFFLFVBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQyJ9