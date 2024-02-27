import test from 'ava';
import PWCore, { ChainID } from '../core';
import { Address, AddressType } from './address';
import { DummyCollector } from '../collectors/dummy-collector';
import { DummyProvider } from '../providers/dummy-provider';
const eth = '0x32f4c2df50f678a94609e98f8ee7ffb14b6799bc';
const ckb = 'ckt1qyqxpayn272n8km2k08hzldynj992egs0waqnr8zjs';
const ckbFull = 'ckt1qjmk32srs9nx345sgj0xrcq6slzx5ta3vt8azm4py95aalx7qq2agvh5ct04panc49rqn6v03mnllv2tv7vmc2z5pkp';
const ckbAddress = new Address(ckb, AddressType.ckb);
const ckbFullAddress = new Address(ckbFull, AddressType.ckb);
const ethAddress = new Address(eth, AddressType.eth);
test.before(async () => {
    await new PWCore('https://aggron.ckb.dev').init(new DummyProvider(), new DummyCollector(), ChainID.ckb_testnet);
});
test('to address and type', (t) => {
    t.is(ethAddress.addressString, eth);
    t.is(ethAddress.addressType, AddressType.eth);
    t.is(ckbAddress.addressString, ckb);
    t.is(ckbAddress.addressType, AddressType.ckb);
    t.is(ckbFullAddress.addressString, ckbFull);
    t.is(ckbFullAddress.addressType, AddressType.ckb);
});
test('to ckb address', (t) => {
    t.is(ethAddress.toCKBAddress(), ckbFull);
    t.is(ckbFullAddress.toCKBAddress(), ckbFull);
    t.is(ckbAddress.toCKBAddress(), ckb);
});
test('to lock script', (t) => {
    t.deepEqual(ethAddress.toLockScript().serializeJson(), {
        args: eth,
        code_hash: PWCore.config.pwLock.script.codeHash,
        hash_type: PWCore.config.pwLock.script.hashType,
    });
    t.deepEqual(ckbAddress.toLockScript().serializeJson(), {
        args: '0x60f493579533db6ab3cf717da49c8a5565107bba',
        code_hash: PWCore.config.defaultLock.script.codeHash,
        hash_type: PWCore.config.defaultLock.script.hashType,
    });
    t.deepEqual(ckbFullAddress.toLockScript().serializeJson(), {
        args: '0x32f4c2df50f678a94609e98f8ee7ffb14b6799bc',
        code_hash: PWCore.config.pwLock.script.codeHash,
        hash_type: PWCore.config.pwLock.script.hashType,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9hZGRyZXNzLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQ3ZCLE9BQU8sTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFNUQsTUFBTSxHQUFHLEdBQUcsNENBQTRDLENBQUM7QUFDekQsTUFBTSxHQUFHLEdBQUcsZ0RBQWdELENBQUM7QUFDN0QsTUFBTSxPQUFPLEdBQ1gsaUdBQWlHLENBQUM7QUFFcEcsTUFBTSxVQUFVLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyRCxNQUFNLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdELE1BQU0sVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRTtJQUNyQixNQUFNLElBQUksTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUM3QyxJQUFJLGFBQWEsRUFBRSxFQUNuQixJQUFJLGNBQWMsRUFBRSxFQUNwQixPQUFPLENBQUMsV0FBVyxDQUNwQixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNoQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QyxDQUFDLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7SUFDM0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUU7UUFDckQsSUFBSSxFQUFFLEdBQUc7UUFDVCxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVE7UUFDL0MsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRO0tBQ2hELENBQUMsQ0FBQztJQUVILENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFO1FBQ3JELElBQUksRUFBRSw0Q0FBNEM7UUFDbEQsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRO1FBQ3BELFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUTtLQUNyRCxDQUFDLENBQUM7SUFFSCxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRTtRQUN6RCxJQUFJLEVBQUUsNENBQTRDO1FBQ2xELFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUTtRQUMvQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVE7S0FDaEQsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==