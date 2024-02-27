"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
const _1 = require(".");
const cell_input_1 = require("./cell-input");
// import { minimalCellCapacity } from '../utils';
const amount_1 = require("./amount");
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
const __1 = require("..");
const utils_1 = require("../utils");
class Cell {
    constructor(capacity, lock, type, outPoint, data = '0x') {
        this.capacity = capacity;
        this.lock = lock;
        this.type = type;
        this.outPoint = outPoint;
        this.data = data;
        this.spaceCheck();
    }
    static fromRPC(data) {
        if (!data) {
            throw new Error('Cannot create cell from empty data');
        }
        ckb_js_toolkit_1.validators.ValidateCellOutput(data);
        return new Cell(data.capacity, _1.Script.fromRPC(data.lock), _1.Script.fromRPC(data.type), _1.OutPoint.fromRPC(data.out_point), data.data);
    }
    static async loadFromBlockchain(rpc, outPoint) {
        const index = Number(outPoint.index);
        const { transaction: { outputs, outputs_data }, } = await rpc.get_transaction(outPoint.txHash);
        const { capacity, lock, type } = outputs[index];
        return new Cell(new _1.Amount(capacity, amount_1.AmountUnit.shannon), new _1.Script(lock.code_hash, lock.args, __1.HashType[lock.hash_type]), type
            ? new _1.Script(type.code_hash, type.args, __1.HashType[type.hash_type])
            : null, outPoint, outputs_data[index]);
    }
    sameWith(cell) {
        if (!cell || !cell.outPoint || !this.outPoint) {
            throw new Error('to be compared, cells must have outPoint value');
        }
        return cell.outPoint.sameWith(this.outPoint);
    }
    resize() {
        // const base = SerializeCellOutput(
        //   normalizers.NormalizeCellOutput(transformers.TransformCellOutput(this))
        // ).byteLength;
        const base = this.type ? 102 : 61;
        const extra = new Buffer(this.data.replace('0x', ''), 'hex').byteLength;
        const size = base + extra;
        this.capacity = new _1.Amount(size.toString());
        return size;
    }
    spaceCheck() {
        // TODO: check if current cell can be filled in to the capacity provided
        // if not, throw an exception
        return true;
    }
    toCellInput(since = '0x0') {
        return this.outPoint ? new cell_input_1.CellInput(this.outPoint, since) : undefined;
    }
    validate() {
        ckb_js_toolkit_1.validators.ValidateCellOutput(ckb_js_toolkit_1.transformers.TransformCellOutput(this));
        if (this.outPoint) {
            ckb_js_toolkit_1.validators.ValidateCellInput(ckb_js_toolkit_1.transformers.TransformCellInput(this.toCellInput()));
        }
        return this;
    }
    // CellOutput format
    serializeJson() {
        return {
            capacity: this.capacity.toHexString(),
            lock: this.lock,
            type: this.type,
        };
    }
    setData(data) {
        data = data.trim();
        const bytes = [];
        for (let i = 0; i < data.length; i++) {
            bytes.push(data.charCodeAt(i));
        }
        this.data = utils_1.byteArrayToHex(bytes);
        this.spaceCheck();
    }
    setHexData(data) {
        data = data.trim();
        if (!data.startsWith('0x')) {
            throw new Error('Hex data should start with 0x');
        }
        this.data = data;
        this.spaceCheck();
    }
    getData() {
        return utils_1.hexToByteArray(this.data.trim())
            .map((char) => String.fromCharCode(char))
            .join('');
    }
    getHexData() {
        return this.data.trim();
    }
    isEmpty() {
        return this.data.trim() === '0x';
    }
}
exports.Cell = Cell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3QkFBNkM7QUFDN0MsNkNBQXlDO0FBQ3pDLGtEQUFrRDtBQUNsRCxxQ0FBc0M7QUFDdEMsbURBQStEO0FBQy9ELDBCQUE4QjtBQUM5QixvQ0FBMEQ7QUFFMUQsTUFBYSxJQUFJO0lBb0NmLFlBQ1MsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLElBQWEsRUFDYixRQUFtQixFQUNsQixPQUFlLElBQUk7UUFKcEIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUUzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQTNDRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUN2RDtRQUNELDJCQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLElBQUksQ0FDYixJQUFJLENBQUMsUUFBUSxFQUNiLFNBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN6QixTQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFDekIsV0FBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQ2hDLElBQUksQ0FBQyxJQUFJLENBQ1YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQVEsRUFBRSxRQUFrQjtRQUMxRCxNQUFNLEtBQUssR0FBRyxNQUFN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