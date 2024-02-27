import { validators, transformers } from 'ckb-js-toolkit';
export class CellDep {
    constructor(depType, outPoint) {
        this.depType = depType;
        this.outPoint = outPoint;
    }
    static fromRPC(data) {
        if (!data)
            return undefined;
        validators.ValidateCellDep(data);
        return new CellDep(data.dep_type, data.out_point);
    }
    validate() {
        validators.ValidateCellDep(transformers.TransformCellDep(this));
        return true;
    }
    sameWith(cellDep) {
        validators.ValidateCellDep(transformers.TransformCellDep(cellDep));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1kZXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kZWxzL2NlbGwtZGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUQsTUFBTSxPQUFPLE9BQU87SUFPbEIsWUFBbUIsT0FBZ0IsRUFBUyxRQUFrQjtRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFObEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDNUIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFJRCxRQUFRO1FBQ04sVUFBVSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxRQUFRLENBQUMsT0FBZ0I7UUFDdkIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQ0wsT0FBTyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTztZQUNoQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU87WUFDTCxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3pCLENBQUM7SUFDSixDQUFDO0NBQ0YifQ==