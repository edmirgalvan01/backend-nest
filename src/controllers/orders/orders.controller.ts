import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('')
  getOrders(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return {
      message: `Orders: ${limit} - ${offset}`,
    };
  }

  @Get(':id')
  getOrder(@Param('id') id: any) {
    return {
      message: `Order id: ${id}`,
    };
  }

  //Create a new order
  @Post()
  //payload is the information that the user sends through the method POST
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }
}
