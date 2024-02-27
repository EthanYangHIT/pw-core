import { Signer } from '.';
import { Keccak256Hasher } from '../hashers';
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
export class EthSigner extends Signer {
    constructor(from) {
        super(new Keccak256Hasher());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXRoLXNpZ25lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWduZXJzL2V0aC1zaWduZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBVyxNQUFNLEdBQUcsQ0FBQztBQUNwQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLFdBQVc7QUFDWCxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUU1QixvQ0FBb0M7QUFDcEMscUNBQXFDO0FBQ3JDLHVDQUF1QztBQUV2QyxrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFFMUIsZ0NBQWdDO0FBQ2hDLDhCQUE4QjtBQUM5Qix3Q0FBd0M7QUFDeEMsT0FBTztBQUVQLGdDQUFnQztBQUNoQyxzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QiwwQkFBMEI7QUFDMUIsU0FBUztBQUNULE9BQU87QUFFUCxtQkFBbUI7QUFDbkIsSUFBSTtBQUVKLE1BQU0sT0FBTyxTQUFVLFNBQVEsTUFBTTtJQUNuQyxZQUE0QixJQUFZO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFESCxTQUFJLEdBQUosSUFBSSxDQUFRO0lBRXhDLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBbUI7UUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQzs7Ozs7OztjQU9FO1lBRUYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QixNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0MsTUFBTSxNQUFNLEdBQUcsZUFBZSxDQUFDO1lBRS9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDbkMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUN4QixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDZCxJQUFJLEdBQUcsRUFBRTtvQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2I7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YifQ==