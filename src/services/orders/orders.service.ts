import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../../entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from '../../dtos/order.dto';

@Injectable()
export class OrdersService {
  private counterId = 1;

  private orders: Order[] = [
    {
      id: 1,
      customer: 'Edmir',
      provider: 'Miguel',
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((o) => o.id === id);
    if (!order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return order;
  }

  create(payload: CreateOrderDto) {
    this.counterId = this.counterId + 1;
    const newOrder = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(newOrder);

    return newOrder;
  }

  update(id: number, payload: UpdateOrderDto) {
    const order = this.findOne(id);
    if (order) {
      const indexOrder = this.orders.findIndex((o) => o.id === id);
      this.orders[indexOrder] = {
        ...order,
        ...payload,
      };
      return this.orders[indexOrder];
    } else {
      return null;
    }
  }

  delete(id: number) {
    const order = this.findOne(id);
    if (order) {
      const indexOrder = this.orders.findIndex((o) => o.id === id);
      this.orders.splice(indexOrder, 1);
      return { message: true };
    } else {
      return { message: false };
    }
  }
}
