import { Injectable } from '@nestjs/common';
import { Comm, Customer } from './types';
import customers from './data.json';

@Injectable()
export class CommsService {
  private pouchPrices: Record<string, number> = {
    A: 55.5,
    B: 59.5,
    C: 62.75,
    D: 66.0,
    E: 69.0,
    F: 71.25,
  };

  private async getCustomers(): Promise<Customer[]> {
    return Promise.resolve(customers);
  }

  private async getCustomerById(id: string): Promise<Customer | null> {
    const customers = await this.getCustomers();
    const customer = customers.find((c) => c.id === id);

    return customer || null;
  }

  private getCustomerCatNames(customer: Customer): string[] {
    return customer.cats.map((cat) => cat.name);
  }

  private humanizeCatNames(catNames: string[]): string {
    if (catNames.length === 0) {
      return '';
    } else if (catNames.length === 1) {
      return catNames[0];
    } else {
      const last = catNames.pop();

      return `${catNames.join(', ')} and ${last}`;
    }
  }

  private getTotalPrice(customer: Customer) {
    const price = customer.cats.reduce(
      (acc, curr) => acc + this.pouchPrices[curr.pouchSize],
      0,
    );

    return price;
  }

  async getCommByCustomerId(id: string): Promise<Comm | null> {
    const customer = await this.getCustomerById(id);

    if (customer == null) {
      return null;
    }

    // assumption: there will always be at least 1 cat in the array
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
}
