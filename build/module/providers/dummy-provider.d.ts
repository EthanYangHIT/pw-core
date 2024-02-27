import { Provider, Platform } from './provider';
export declare class DummyProvider extends Provider {
    sign(message: string): Promise<string>;
    constructor(platform?: Platform);
    init(): Promise<Provider>;
    close(): Promise<void>;
}
