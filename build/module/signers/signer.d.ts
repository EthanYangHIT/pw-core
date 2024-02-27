import { Transaction } from '..';
import { Hasher } from '../hashers';
export interface Message {
    index: number;
    message: string;
}
export declare abstract class Signer {
    private readonly hasher;
    protected constructor(hasher: Hasher);
    protected abstract signMessages(messages: Message[]): Promise<string[]>;
    sign(tx: Transaction): Promise<Transaction>;
    private toMessages;
}
