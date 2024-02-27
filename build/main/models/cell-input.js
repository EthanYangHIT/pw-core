"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellInput = void 0;
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
class CellInput {
    constructor(previousOutput, since = '0x0') {
        this.previousOutput = previousOutput;
        this.since = since;
    }
    static fromRPC(data) {
        if (!data) {
            throw new Error('Cannot create CellInput from empty data');
        }
        ckb_js_toolkit_1.validators.ValidateCellInput(data);
        return new CellInput(data.previous_output, data.since);
    }
    sameWith(cellInput) {
        ckb_js_toolkit_1.validators.ValidateCellInput(ckb_js_toolkit_1.transformers.TransformCellInput(cellInput));
        return (cellInput.previousOutput.sameWith(this.previousOutput) &&
            cellInput.since === this.since);
    }
    validate() {
        ckb_js_toolkit_1.validators.ValidateCellInput(ckb_js_toolkit_1.transformers.TransformCellInput(this));
        return true;
    }
    serializeJson() {
        return {
            since: this.since,
            previous_output: this.previousOutput,
        };
    }
}
exports.CellInput = CellInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvY2VsbC1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxtREFBMEQ7QUFFMUQsTUFBYSxTQUFTO0lBU3BCLFlBQW1CLGNBQXdCLEVBQVMsUUFBZ0IsS0FBSztRQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBVTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUcsQ0FBQztJQVI3RSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUM1RDtRQUNELDJCQUFVLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBSUQsUUFBUSxDQUFDLFNBQW9CO1FBQzNCLDJCQUFVLENBQUMsaUJBQWlCLENBQUMsNkJBQVksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FDTCxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3RELFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sMkJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyw2QkFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3JDLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUE5QkQsOEJBOEJDIn0=