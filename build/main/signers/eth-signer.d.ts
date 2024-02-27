import { Signer, Message } from '.';
export declare class EthSigner extends Signer {
    readonly from: string;
    constructor(from: string);
    signMessages(messages: Message[]): Promise<string[]>;
}
