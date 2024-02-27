"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutPoint = void 0;
const ckb_js_toolkit_1 = require("ckb-js-toolkit");
class OutPoint {
    constructor(txHash, index) {
        this.txHash = txHash;
        this.index = index;
    }
    static fromRPC(data) {
        if (!data)
            return undefined;
        ckb_js_toolkit_1.validators.ValidateOutPoint(data);
        return new OutPoint(data.tx_hash, data.index);
    }
    sameWith(outPoint) {
        ckb_js_toolkit_1.validators.ValidateOutPoint(ckb_js_toolkit_1.transformers.TransformOutPoint(outPoint));
        return this.txHash === outPoint.txHash && this.index === outPoint.index;
    }
    validate() {
        ckb_js_toolkit_1.validators.ValidateOutPoint(ckb_js_toolkit_1.transformers.TransformOutPoint(this));
        return this;
    }
    serializeJson() {
        return {
            tx_hash: this.txHash,
            index: this.index,
        };
    }
}
exports.OutPoint = OutPoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0LXBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZGVscy9vdXQtcG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQTBEO0FBRzFELE1BQWEsUUFBUTtJQU9uQixZQUFtQixNQUFjLEVBQVMsS0FBYTtRQUFwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7SUFOM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFTO1FBQ3RCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxTQUFTLENBQUM7UUFDNUIsMkJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFJRCxRQUFRLENBQUMsUUFBa0I7UUFDekIsMkJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBWSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEUsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzFFLENBQUM7SUFFRCxRQUFRO1FBQ04sMkJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyw2QkFBWSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU87WUFDTCxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF6QkQsNEJBeUJDIn0=