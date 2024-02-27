"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.Platform = void 0;
var Platform;
(function (Platform) {
    Platform[Platform["ckb"] = 0] = "ckb";
    Platform[Platform["eth"] = 1] = "eth";
    // btc,
    // eos,
    // tron,
    // libra
})(Platform = exports.Platform || (exports.Platform = {}));
class Provider {
    constructor(platform) {
        this.platform = platform;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
}
exports.Provider = Provider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLElBQVksUUFPWDtBQVBELFdBQVksUUFBUTtJQUNsQixxQ0FBRyxDQUFBO0lBQ0gscUNBQUcsQ0FBQTtJQUNILE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFFBQVE7QUFDVixDQUFDLEVBUFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFPbkI7QUFFRCxNQUFzQixRQUFRO0lBQzVCLFlBQTRCLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBR2xELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0NBT0Y7QUFoQkQsNEJBZ0JDIn0=