"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsService = void 0;
const common_1 = require("@nestjs/common");
const data_json_1 = __importDefault(require("./data.json"));
let CommsService = class CommsService {
    constructor() {
        this.pouchPrices = {
            A: 55.5,
            B: 59.5,
            C: 62.75,
            D: 66.0,
            E: 69.0,
            F: 71.25,
        };
    }
    async getCustomers() {
        return Promise.resolve(data_json_1.default);
    }
    async getCustomerById(id) {
        const customers = await this.getCustomers();
        const customer = customers.find((c) => c.id === id);
        return customer || null;
    }
    getCustomerCatNames(customer) {
        return customer.cats.map((cat) => cat.name);
    }
    humanizeCatNames(catNames) {
        if (catNames.length === 0) {
            return '';
        }
        else if (catNames.length === 1) {
            return catNames[0];
        }
        else {
            const last = catNames.pop();
            return `${catNames.join(', ')} and ${last}`;
        }
    }
    getTotalPrice(customer) {
        const price = customer.cats.reduce((acc, curr) => acc + this.pouchPrices[curr.pouchSize], 0);
        return price;
    }
    async getCommByCustomerId(id) {
        const customer = await this.getCustomerById(id);
        if (customer == null) {
            return null;
        }
        const cats = this.getCustomerCatNames(customer);
        const humanizedCatNames = this.humanizeCatNames(cats);
        const customerName = `${customer.firstName} ${customer.lastName}`;
        const title = `Your next delivery for ${humanizedCatNames} is on the way!`;
        const message = `Hey ${customerName}! In two days' time we'll be charging you for your next order for ${humanizedCatNames}'s fresh food.`;
        const totalPrice = this.getTotalPrice(customer);
        const freeGift = totalPrice > 120;
        return {
            title,
            message,
            totalPrice,
            freeGift,
        };
    }
};
exports.CommsService = CommsService;
exports.CommsService = CommsService = __decorate([
    (0, common_1.Injectable)()
], CommsService);
//# sourceMappingURL=comms.service.js.map