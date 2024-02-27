"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EthSigner = void 0;
const _1 = require(".");
const hashers_1 = require("../hashers");
// import {
//   ecsign,
//   bufferToHex,
//   toBuffer,
//   setLengthLeft,
//   hashPersonalMessage,
// } from 'ethereumjs-util';
// const a = '2A77A5C9DBA59D6F8B7A';
// const b = '2737A8A6D8E511CDC9439';
// const c = 'C97E919959D02502F8BCB50';
// function sendSync({ params }) {
//   const msg = hashPersonalMessage(toBuffer(params[0]))
//     .toString('hex')
//     .replace('0x', '');
//   const { r, s, v } = ecsign(
//     new Buffer(msg, 'hex'),
//     new Buffer(`${a}${b}${c}`, 'hex')
//   );
//   const hexsig = bufferToHex(
//     Buffer.concat([
//       setLengthLeft(r, 32),
//       setLengthLeft(s, 32),
//       toBuffer(v - 27),
//     ])
//   );
//   return hexsig;
// }
class EthSigner extends _1.Signer {
    constructor(from) {
        super(new hashers_1.Keccak256Hasher());
        this.from = from;
    }
    signMessages(messages) {
        return new Promise((resolve, reject) => {
            /*
            try {
              const sig = sendSync({ params: [messages[0].message] });
              resolve([sig]);
            } catch (e) {
              reject(e);
            }
            */
            const from = this.from;
            const params = [messages[0].message, from];
            const method = 'personal_sign';
            window.web3.currentProvider.sendAsync({ method, params, from }, (err, result) => {
                if (err) {
                    reject(err);
                }
                if (result.error) {
                    reject(result.error);
                }
                result = result.result;
                let v = Number.parseInt(result.slice(-2), 16);
                if (v >= 27)
                    v -= 27;
                result = result.slice(0, -2) + v.toString(16).padStart(2, '0');
                resolve([result]);
            });
        });
    }
}
exports.EthSigner = EthSigner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoLXNpZ25lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWduZXJzL2V0aC1zaWduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0JBQW9DO0FBQ3BDLHdDQUE2QztBQUM3QyxXQUFXO0FBQ1gsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFFNUIsb0NBQW9DO0FBQ3BDLHFDQUFxQztBQUNyQyx1Q0FBdUM7QUFFdkMsa0NBQWtDO0FBQ2xDLHlEQUF5RDtBQUN6RCx1QkFBdUI7QUFDdkIsMEJBQTBCO0FBRTFCLGdDQUFnQztBQUNoQyw4QkFBOEI7QUFDOUIsd0NBQXdDO0FBQ3hDLE9BQU87QUFFUCxnQ0FBZ0M7QUFDaEMsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5Qiw4QkFBOEI7QUFDOUIsMEJBQTBCO0FBQzFCLFNBQVM7QUFDVCxPQUFPO0FBRVAsbUJBQW1CO0FBQ25CLElBQUk7QUFFSixNQUFhLFNBQVUsU0FBUSxTQUFNO0lBQ25DLFlBQTRCLElBQVk7UUFDdEMsS0FBSyxDQUFDLElBQUkseUJBQWUsRUFBRSxDQUFDLENBQUM7UUFESCxTQUFJLEdBQUosSUFBSSxDQUFRO0lBRXhDLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBbUI7UUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQzs7Ozs7OztjQU9FO1lBRUYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QixNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0MsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDbkMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUN4QixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDZCxJQUFJLEdBQUcsRUFBRTtvQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2I7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUF0Q0QsOEJBc0NDIn0=