import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from '../../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../../dtos/customer.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;

  private customers: Customer[] = [
    {
      id: 1,
      name: 'Edmir',
      age: 19,
      email: 'edmirgalvaz@gmail.com',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((c) => c.id === id);

    if (!customer) {
      throw new NotFoundException(`customer #${id} not found`);
    } else {
      return null;
    }

    return customer;
  }

  create(payload: CreateCustomerDto) {
    this.counterId += 1;

    const newCustomer = {
      id: this.counterId,
      ...payload,
    };

    this.customers.push(newCustomer);

    return newCustomer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    if (customer) {
      const indexCustomer = this.customers.findIndex((c) => c.id === id);
      this.customers[indexCustomer] = {
        ...customer,
        ...payload,
      };

      return this.customers[indexCustomer];
    } else {
      return null;
    }
  }

  delete(id: number) {
    const customer = this.findOne(id);
    if (customer) {
      const indexCustomer = this.customers.findIndex((c) => c.id === id);
      this.customers.splice(indexCustomer, 1);

      return { message: true };
    } else {
      return { message: false };
    }
  }
}
