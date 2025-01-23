import { CommsService } from './comms.service';
export declare class CommsController {
    private readonly commsService;
    constructor(commsService: CommsService);
    getCommById(id: string): Promise<import("./types").Comm>;
}
