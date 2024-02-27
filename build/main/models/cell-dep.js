"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellDep = void 0;
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
class CellDep {
    constructor(depType, outPoint) {
        this.depType = depType;
        this.outPoint = outPoint;
    }
    static fromRPC(data) {
        if (!data)
            return undefined;
        ckb_js_toolkit_1.validators.ValidateCellDep(data);
        return new CellDep(data.dep_type, data.out_point);
    }
    validate() {
        ckb_js_toolkit_1.validators.ValidateCellDep(ckb_js_toolkit_1.transformers.TransformCellDep(this));
        return true;
    }
    sameWith(cellDep) {
        ckb_js_toolkit_1.validators.ValidateCellDep(ckb_js_toolkit_1.transformers.TransformCellDep(cellDep));
        return (cellDep.depType === this.depType &&
            cellDep.outPoint.sameWith(this.outPoint));
    }
    serializeJson() {
        return {
            dep_type: this.depType,
            out_point: this.outPoint,
        };
    }
}
exports.CellDep = CellDep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1kZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2NlbGwtZGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLG1EQUEwRDtBQUUxRCxNQUFhLE9BQU87SUFPbEIsWUFBbUIsT0FBZ0IsRUFBUyxRQUFrQjtRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFObEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDNUIsMkJBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBSUQsUUFBUTtRQUNOLDJCQUFVLENBQUMsZUFBZSxDQUFDLDZCQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxRQUFRLENBQUMsT0FBZ0I7UUFDdkIsMkJBQVUsQ0FBQyxlQUFlLENBQUMsNkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sQ0FDTCxPQUFPLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxPQUFPO1lBQ2hDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekMsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTztZQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDekIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTVCRCwwQkE0QkMifQ==