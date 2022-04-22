import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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

  //Edit a order through your id
  @Put(':id')
  //We will receive new order data through the body.
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'Accion de eliminar',
      id,
    };
  }
}
