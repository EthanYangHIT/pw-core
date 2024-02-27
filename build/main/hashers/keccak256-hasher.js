"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keccak256Hasher = void 0;
const _1 = require(".");
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
const keccak_1 = __importDefault(require("keccak"));
class Keccak256Hasher extends _1.Hasher {
    constructor() {
        super(keccak_1.default('keccak256'));
    }
    update(data) {
        let array;
        if (data instanceof ckb_js_toolkit_1.Reader) {
            /** Reader type params not enter this branch, it's weired */
            array = Buffer.from(data.serializeJson().replace('0x', ''));
        }
        else if (data instanceof ArrayBuffer) {
            array = Buffer.from(new Uint8Array(data));
        }
        else if (typeof data === 'string') {
            array = Buffer.from(data);
        }
        else {
            array = Buffer.from(new Uint8Array(new ckb_js_toolkit_1.Reader(data).toArrayBuffer()));
        }
        this.h.update(array);
        return this;
    }
    digest() {
        const hex = '0x' + this.h.digest('hex').toString();
        return new ckb_js_toolkit_1.Reader(hex);
    }
    reset() {
        this.h = keccak_1.default('keccak256');
    }
}
exports.Keccak256Hasher = Keccak256Hasher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2VjY2FrMjU2LWhhc2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oYXNoZXJzL2tlY2NhazI1Ni1oYXNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQTJCO0FBQzNCLG1EQUF3QztBQUN4QyxvREFBNEI7QUFFNUIsTUFBYSxlQUFnQixTQUFRLFNBQU07SUFDekM7UUFDRSxLQUFLLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBbUM7UUFDeEMsSUFBSSxLQUFhLENBQUM7UUFDbEIsSUFBSSxJQUFJLFlBQVksdUJBQU0sRUFBRTtZQUMxQiw0REFBNEQ7WUFDNUQsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUM3RDthQUFNLElBQUksSUFBSSxZQUFZLFdBQVcsRUFBRTtZQUN0QyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDbkMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7YUFBTTtZQUNMLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksdUJBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25ELE9BQU8sSUFBSSx1QkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLENBQUMsR0FBRyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRjtBQTdCRCwwQ0E2QkMifQ==