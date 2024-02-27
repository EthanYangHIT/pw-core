export var Platform;
(function (Platform) {
    Platform[Platform["ckb"] = 0] = "ckb";
    Platform[Platform["eth"] = 1] = "eth";
    // btc,
    // eos,
    // tron,
    // libra
})(Platform || (Platform = {}));
export class Provider {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBTixJQUFZLFFBT1g7QUFQRCxXQUFZLFFBQVE7SUFDbEIscUNBQUcsQ0FBQTtJQUNILHFDQUFHLENBQUE7SUFDSCxPQUFPO0lBQ1AsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0FBQ1YsQ0FBQyxFQVBXLFFBQVEsS0FBUixRQUFRLFFBT25CO0FBRUQsTUFBTSxPQUFnQixRQUFRO0lBQzVCLFlBQTRCLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBR2xELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0NBT0YifQ==