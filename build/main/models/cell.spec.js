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
const core_1 = __importStar(require("../core"));
const dummy_collector_1 = require("../collectors/dummy-collector");
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
const _1 = require(".");
const interfaces_1 = require("../interfaces");
const dummy_provider_1 = require("../providers/dummy-provider");
const test = ava_1.default;
const address = new _1.Address('ckt1qyqxpayn272n8km2k08hzldynj992egs0waqnr8zjs', _1.AddressType.ckb);
test.before(async (t) => {
    const pw = new core_1.default('https://aggron.ckb.dev');
    await pw.init(new dummy_provider_1.DummyProvider(), new dummy_collector_1.DummyCollector(), core_1.ChainID.ckb_testnet);
    t.context.pw = pw;
});
// from cell at https://explorer.nervos.org/aggron/transaction/0x79221866125b9aff33c4303a6c35bde25d235e7e10025a86ca2a5d6ad657f51f
const data = 'Hello from Lay2';
const hexData = '0x48656c6c6f2066726f6d204c617932';
test('data actions', (t) => {
    const cell = new _1.Cell(new _1.Amount('100', _1.AmountUnit.ckb), address.toLockScript());
    t.true(cell.isEmpty());
    // t.is(cell.resize(), 61);
    cell.setData(data);
    t.is(cell.getData(), data);
    t.is(cell.getHexData(), hexData);
    t.false(cell.isEmpty());
    cell.setHexData(hexData);
    t.is(cell.getData(), data);
    t.is(cell.getHexData(), hexData);
    cell.setData(hexData);
    t.not(cell.getData(), data);
    t.not(cell.getHexData(), hexData);
    t.throws(() => cell.setHexData(data));
});
test('loadFromBlockchain and validate', async (t) => {
    const outPoint = new _1.OutPoint('0x79221866125b9aff33c4303a6c35bde25d235e7e10025a86ca2a5d6ad657f51f', '0x0');
    const loadedCell = await _1.Cell.loadFromBlockchain(t.context.pw.rpc, outPoint);
    t.notThrows(() => ckb_js_toolkit_1.validators.ValidateCellOutput(ckb_js_toolkit_1.transformers.TransformCellOutput(loadedCell.serializeJson())));
    t.true(loadedCell.capacity.eq(new _1.Amount('76', _1.AmountUnit.ckb)));
    t.true(loadedCell.lock.sameWith(new _1.Script('0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8', '0x705ca2e725e9b26e6abb842ed2043ea80197dfd7', interfaces_1.HashType.type)));
    t.is(loadedCell.type, null);
    t.true(loadedCell.outPoint.sameWith(outPoint));
    t.is(loadedCell.getHexData(), hexData);
    t.is(loadedCell.getData(), data);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9jZWxsLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGdEQUEwQztBQUMxQyxtRUFBK0Q7QUFDL0QsbURBQTBEO0FBQzFELHdCQVFXO0FBQ1gsOENBQXlDO0FBQ3pDLGdFQUE0RDtBQUU1RCxNQUFNLElBQUksR0FBRyxhQUF3QyxDQUFDO0FBRXRELE1BQU0sT0FBTyxHQUFHLElBQUksVUFBTyxDQUN6QixnREFBZ0QsRUFDaEQsY0FBVyxDQUFDLEdBQUcsQ0FDaEIsQ0FBQztBQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sRUFBRSxHQUFHLElBQUksY0FBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDaEQsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksOEJBQWEsRUFBRSxFQUFFLElBQUksZ0NBQWMsRUFBRSxFQUFFLGNBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU5RSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDcEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxpSUFBaUk7QUFDakksTUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFDL0IsTUFBTSxPQUFPLEdBQUcsa0NBQWtDLENBQUM7QUFFbkQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3pCLE1BQU0sSUFBSSxHQUFHLElBQUksT0FBSSxDQUNuQixJQUFJLFNBQU0sQ0FBQyxLQUFLLEVBQUUsYUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUNqQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQ3ZCLENBQUM7SUFFRixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FB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