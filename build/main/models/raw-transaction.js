"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawTransaction = void 0;
const __1 = __importDefault(require(".."));
const core_1 = require("@ckb-lumos/types/lib/core");
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
const hashers_1 = require("../hashers");
class RawTransaction {
    constructor(inputCells, outputs, cellDeps = [
        __1.default.config.defaultLock.cellDep,
        __1.default.config.pwLock.cellDep,
    ], headerDeps = [], version = '0x0') {
        this.inputCells = inputCells;
        this.outputs = outputs;
        this.cellDeps = cellDeps;
        this.headerDeps = headerDeps;
        this.version = version;
        this.inputs = inputCells.map((i) => i.toCellInput());
        this.outputsData = this.outputs.map((o) => o.getHexData());
    }
    sameWith(raw) {
        ckb_js_toolkit_1.validators.ValidateTransaction(ckb_js_toolkit_1.transformers.TransformTransaction(raw));
        return raw.toHash() === this.toHash();
    }
    toHash() {
        const rawTx = ckb_js_toolkit_1.transformers.TransformRawTransaction(this);
        const hasher = new hashers_1.Blake2bHasher();
        return hasher
            .hash(new ckb_js_toolkit_1.Reader(core_1.SerializeRawTransaction(ckb_js_toolkit_1.normalizers.NormalizeRawTransaction(rawTx))))
            .serializeJson();
    }
    validate() {
        ckb_js_toolkit_1.validators.ValidateRawTransaction(ckb_js_toolkit_1.transformers.TransformRawTransaction(this));
        return true;
    }
    serializeJson() {
        return {
            version: this.version,
            cell_deps: this.cellDeps,
            header_deps: this.headerDeps,
            inputs: this.inputs,
            outputs: this.outputs,
            outputs_data: this.outputsData,
        };
    }
}
exports.RawTransaction = RawTransaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF3LXRyYW5zYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9yYXctdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMkNBQXFEO0FBQ3JELG9EQUFvRTtBQUNwRSxtREFBK0U7QUFFL0Usd0NBQTJDO0FBRTNDLE1BQWEsY0FBYztJQUl6QixZQUNTLFVBQWtCLEVBQ2xCLE9BQWUsRUFDZixXQUFzQjtRQUMzQixXQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPO1FBQ2pDLFdBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87S0FDN0IsRUFDTSxhQUF1QixFQUFFLEVBQ2hCLFVBQWtCLEtBQUs7UUFQaEMsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FHZDtRQUNNLGVBQVUsR0FBVixVQUFVLENBQWU7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFFdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsUUFBUSxDQUFDLEdBQW1CO1FBQzFCLDJCQUFVLENBQUMsbUJBQW1CLENBQUMsNkJBQVksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sS0FBSyxHQUFHLDZCQUFZLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsTUFBTSxNQUFNLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUM7UUFDbkMsT0FBTyxNQUFNO2FBQ1YsSUFBSSxDQUNILElBQUksdUJBQU0sQ0FDUiw4QkFBdUIsQ0FBQyw0QkFBVyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ3BFLENBQ0Y7YUFDQSxhQUFhLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUTtRQUNOLDJCQUFVLENBQUMsc0JBQXNCLENBQy9CLDZCQUFZLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQzNDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTztZQUNMLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDeEIsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQy9CLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFuREQsd0NBbURDIn0=