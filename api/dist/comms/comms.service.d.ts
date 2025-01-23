import { Comm } from './types';
export declare class CommsService {
    private pouchPrices;
    private getCustomers;
    private getCustomerById;
    private getCustomerCatNames;
    private humanizeCatNames;
    private getTotalPrice;
    getCommByCustomerId(id: string): Promise<Comm | null>;
}
