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
const address_1 = require("./address");
const dummy_collector_1 = require("../collectors/dummy-collector");
const dummy_provider_1 = require("../providers/dummy-provider");
const eth = '0x32f4c2df50f678a94609e98f8ee7ffb14b6799bc';
const ckb = 'ckt1qyqxpayn272n8km2k08hzldynj992egs0waqnr8zjs';
const ckbFull = 'ckt1qjmk32srs9nx345sgj0xrcq6slzx5ta3vt8azm4py95aalx7qq2agvh5ct04panc49rqn6v03mnllv2tv7vmc2z5pkp';
const ckbAddress = new address_1.Address(ckb, address_1.AddressType.ckb);
const ckbFullAddress = new address_1.Address(ckbFull, address_1.AddressType.ckb);
const ethAddress = new address_1.Address(eth, address_1.AddressType.eth);
ava_1.default.before(async () => {
    await new core_1.default('https://aggron.ckb.dev').init(new dummy_provider_1.DummyProvider(), new dummy_collector_1.DummyCollector(), core_1.ChainID.ckb_testnet);
});
ava_1.default('to address and type', (t) => {
    t.is(ethAddress.addressString, eth);
    t.is(ethAddress.addressType, address_1.AddressType.eth);
    t.is(ckbAddress.addressString, ckb);
    t.is(ckbAddress.addressType, address_1.AddressType.ckb);
    t.is(ckbFullAddress.addressString, ckbFull);
    t.is(ckbFullAddress.addressType, address_1.AddressType.ckb);
});
ava_1.default('to ckb address', (t) => {
    t.is(ethAddress.toCKBAddress(), ckbFull);
    t.is(ckbFullAddress.toCKBAddress(), ckbFull);
    t.is(ckbAddress.toCKBAddress(), ckb);
});
ava_1.default('to lock script', (t) => {
    t.deepEqual(ethAddress.toLockScript().serializeJson(), {
        args: eth,
        code_hash: core_1.default.config.pwLock.script.codeHash,
        hash_type: core_1.default.config.pwLock.script.hashType,
    });
    t.deepEqual(ckbAddress.toLockScript().serializeJson(), {
        args: '0x60f493579533db6ab3cf717da49c8a5565107bba',
        code_hash: core_1.default.config.defaultLock.script.codeHash,
        hash_type: core_1.default.config.defaultLock.script.hashType,
    });
    t.deepEqual(ckbFullAddress.toLockScript().serializeJson(), {
        args: '0x32f4c2df50f678a94609e98f8ee7ffb14b6799bc',
        code_hash: core_1.default.config.pwLock.script.codeHash,
        hash_type: core_1.default.config.pwLock.script.hashType,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9hZGRyZXNzLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLGdEQUEwQztBQUMxQyx1Q0FBaUQ7QUFDakQsbUVBQStEO0FBQy9ELGdFQUE0RDtBQUU1RCxNQUFNLEdBQUcsR0FBRyw0Q0FBNEMsQ0FBQztBQUN6RCxNQUFNLEdBQUcsR0FBRyxnREFBZ0QsQ0FBQztBQUM3RCxNQUFNLE9BQU8sR0FDWCxpR0FBaUcsQ0FBQztBQUVwRyxNQUFNLFVBQVUsR0FBRyxJQUFJLGlCQUFPLENBQUMsR0FBRyxFQUFFLHFCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckQsTUFBTSxjQUFjLEdBQUcsSUFBSSxpQkFBTyxDQUFDLE9BQU8sRUFBRSxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdELE1BQU0sVUFBVSxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFHLEVBQUUscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVyRCxhQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFO0lBQ3JCLE1BQU0sSUFBSSxjQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxJQUFJLENBQzdDLElBQUksOEJBQWEsRUFBRSxFQUNuQixJQUFJLGdDQUFjLEVBQUUsRUFDcEIsY0FBTyxDQUFDLFdBQVcsQ0FDcEIsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBRUgsYUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDaEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUscUJBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLHFCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDLENBQUM7QUFFSCxhQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILGFBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzNCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFO1FBQ3JELElBQUksRUFBRSxHQUFHO1FBQ1QsU0FBUyxFQUFFLGNBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQy9DLFNBQVMsRUFBRSxjQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUTtLQUNoRCxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUNyRCxJQUFJLEVBQUUsNENBQTRDO1FBQ2xELFNBQVMsRUFBRSxjQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUNwRCxTQUFTLEVBQUUsY0FBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVE7S0FDckQsQ0FBQyxDQUFDO0lBRUgsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUU7UUFDekQsSUFBSSxFQUFFLDRDQUE0QztRQUNsRCxTQUFTLEVBQUUsY0FBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDL0MsU0FBUyxFQUFFLGNBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRO0tBQ2hELENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=