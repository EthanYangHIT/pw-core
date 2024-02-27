import { validators, transformers } from 'ckb-js-toolkit';
export class CellInput {
    constructor(previousOutput, since = '0x0') {
        this.previousOutput = previousOutput;
        this.since = since;
    }
    static fromRPC(data) {
        if (!data) {
            throw new Error('Cannot create CellInput from empty data');
        }
        validators.ValidateCellInput(data);
        return new CellInput(data.previous_output, data.since);
    }
    sameWith(cellInput) {
        validators.ValidateCellInput(transformers.TransformCellInput(cellInput));
        return (cellInput.previousOutput.sameWith(this.previousOutput) &&
            cellInput.since === this.since);
    }
    validate() {
        validators.ValidateCellInput(transformers.TransformCellInput(this));
        return true;
    }
    serializeJson() {
        return {
            since: this.since,
            previous_output: this.previousOutput,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvY2VsbC1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFELE1BQU0sT0FBTyxTQUFTO0lBU3BCLFlBQW1CLGNBQXdCLEVBQVMsUUFBZ0IsS0FBSztRQUF0RCxtQkFBYyxHQUFkLGNBQWMsQ0FBVTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQUcsQ0FBQztJQVI3RSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQVM7UUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztTQUM1RDtRQUNELFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFJRCxRQUFRLENBQUMsU0FBb0I7UUFDM0IsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FDTCxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ3RELFNBQVMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sVUFBVSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLGVBQWUsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNyQyxDQUFDO0lBQ0osQ0FBQztDQUNGIn0=