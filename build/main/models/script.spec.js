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
const _1 = require(".");
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
const dummy_provider_1 = require("../providers/dummy-provider");
const dummy_collector_1 = require("../collectors/dummy-collector");
const test = ava_1.default;
const address = new _1.Address('ckt1qyqxpayn272n8km2k08hzldynj992egs0waqnr8zjs', _1.AddressType.ckb);
const ethAddress = new _1.Address('0x26C5F390FF2033CbB44377361c63A3Dd2DE3121d', _1.AddressType.eth);
test.before(async (t) => {
    await new core_1.default('https://aggron.ckb.dev').init(new dummy_provider_1.DummyProvider(), new dummy_collector_1.DummyCollector(), core_1.ChainID.ckb_testnet);
    t.context.lockScript = new _1.Script(core_1.default.config.defaultLock.script.codeHash, '0x60f493579533db6ab3cf717da49c8a5565107bba', core_1.default.config.defaultLock.script.hashType);
    t.context.ethLockScript = new _1.Script(core_1.default.config.pwLock.script.codeHash, '0x26C5F390FF2033CbB44377361c63A3Dd2DE3121d', core_1.default.config.pwLock.script.hashType);
});
test('validate', (t) => {
    t.notThrows(() => ckb_js_toolkit_1.validators.ValidateScript(t.context.lockScript.serializeJson()));
});
test('sameWith', (t) => {
    t.true(t.context.lockScript.sameWith(t.context.lockScript), 'the t.context.two lock scripts are the same');
});
test('toAddress', (t) => {
    t.is(t.context.lockScript.toAddress().toCKBAddress(), address.toCKBAddress());
    t.is(t.context.ethLockScript.toAddress().toCKBAddress(), ethAddress.toCKBAddress());
});
test.todo('toHash');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL3NjcmlwdC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxnREFBMEM7QUFDMUMsd0JBQWlEO0FBQ2pELG1EQUE0QztBQUM1QyxnRUFBNEQ7QUFDNUQsbUVBQStEO0FBRS9ELE1BQU0sSUFBSSxHQUFHLGFBR1gsQ0FBQztBQUNILE1BQU0sT0FBTyxHQUFHLElBQUksVUFBTyxDQUN6QixnREFBZ0QsRUFDaEQsY0FBVyxDQUFDLEdBQUcsQ0FDaEIsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLElBQUksVUFBTyxDQUM1Qiw0Q0FBNEMsRUFDNUMsY0FBVyxDQUFDLEdBQUcsQ0FDaEIsQ0FBQztBQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sSUFBSSxjQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQzdDLElBQUksOEJBQWEsRUFBRSxFQUNuQixJQUFJLGdDQUFjLEVBQUUsRUFDcEIsY0FBTyxDQUFDLFdBQVcsQ0FDcEIsQ0FBQztJQUVGLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksU0FBTSxDQUMvQixjQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUN6Qyw0Q0FBNEMsRUFDNUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDMUMsQ0FBQztJQUVGLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLElBQUksU0FBTSxDQUNsQyxjQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUNwQyw0Q0FBNEMsRUFDNUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDckMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3JCLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQ2YsMkJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FDaEUsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQ0osQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQ25ELDZDQUE2QyxDQUM5QyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDLENBQUMsRUFBRSxDQUNGLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksRUFBRSxFQUNsRCxVQUFVLENBQUMsWUFBWSxFQUFFLENBQzFCLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMifQ==