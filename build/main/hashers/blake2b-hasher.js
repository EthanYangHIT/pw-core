"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blake2bHasher = void 0;
const _1 = require(".");
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
const blake2b_1 = __importDefault(require("blake2b"));
class Blake2bHasher extends _1.Hasher {
    constructor() {
        const h = blake2b_1.default(32, null, null, new Uint8Array(ckb_js_toolkit_1.Reader.fromRawString('ckb-default-hash').toArrayBuffer()));
        super(h);
    }
    update(data) {
        this.h.update(new Uint8Array(new ckb_js_toolkit_1.Reader(data).toArrayBuffer()));
        return this;
    }
    digest() {
        const out = new Uint8Array(32);
        this.h.digest(out);
        return new ckb_js_toolkit_1.Reader(out.buffer);
    }
    reset() {
        this.h = blake2b_1.default(32, null, null, new Uint8Array(ckb_js_toolkit_1.Reader.fromRawString('ckb-default-hash').toArrayBuffer()));
    }
}
exports.Blake2bHasher = Blake2bHasher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxha2UyYi1oYXNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGFzaGVycy9ibGFrZTJiLWhhc2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3QkFBMkI7QUFDM0IsbURBQXdDO0FBQ3hDLHNEQUE4QjtBQUU5QixNQUFhLGFBQWMsU0FBUSxTQUFNO0lBQ3ZDO1FBQ0UsTUFBTSxDQUFDLEdBQUcsaUJBQU8sQ0FDZixFQUFFLEVBQ0YsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLFVBQVUsQ0FBQyx1QkFBTSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQ3pFLENBQUM7UUFDRixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQTBCO1FBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksdUJBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sSUFBSSx1QkFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxDQUFDLEdBQUcsaUJBQU8sQ0FDZCxFQUFFLEVBQ0YsSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLFVBQVUsQ0FBQyx1QkFBTSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUE5QkQsc0NBOEJDIn0=