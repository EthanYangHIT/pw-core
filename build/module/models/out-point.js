import { validators, transformers } from 'ckb-js-toolkit';
export class OutPoint {
    constructor(txHash, index) {
        this.txHash = txHash;
        this.index = index;
    }
    static fromRPC(data) {
        if (!data)
            return undefined;
        validators.ValidateOutPoint(data);
        return new OutPoint(data.tx_hash, data.index);
    }
    sameWith(outPoint) {
        validators.ValidateOutPoint(transformers.TransformOutPoint(outPoint));
        return this.txHash === outPoint.txHash && this.index === outPoint.index;
    }
    validate() {
        validators.ValidateOutPoint(transformers.TransformOutPoint(this));
        return this;
    }
    serializeJson() {
        return {
            tx_hash: this.txHash,
            index: this.index,
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0LXBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9vdXQtcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUcxRCxNQUFNLE9BQU8sUUFBUTtJQU9uQixZQUFtQixNQUFjLEVBQVMsS0FBYTtRQUFwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7SUFOM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDNUIsVUFBVSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUlELFFBQVEsQ0FBQyxRQUFrQjtRQUN6QixVQUFVLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzFFLENBQUM7SUFFRCxRQUFRO1FBQ04sVUFBVSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDO0lBQ0osQ0FBQztDQUNGIn0=