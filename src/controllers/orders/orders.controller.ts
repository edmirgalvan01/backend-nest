import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('')
  getOrders(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return `Orders: ${limit} - ${offset}`;
  }

  @Get(':id')
  getOrder(@Param('id') id: any) {
    return `Order id: ${id}`;
  }
}
