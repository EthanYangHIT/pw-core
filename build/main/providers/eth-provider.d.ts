import { Provider } from './provider';
import { Address } from '..';
export declare class EthProvider extends Provider {
    onAddressChanged: (newAddress: Address) => void;
    constructor(onAddressChanged?: (newAddress: Address) => void);
    init(): Promise<Provider>;
    ensResolver(ens: string): Promise<string>;
    sign(message: string): Promise<string>;
    close(): Promise<void>;
}
