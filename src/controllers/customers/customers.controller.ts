import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('')
  getCustomers(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return {
      message: `Customers: ${limit} - ${offset}`,
    };
  }

  @Get(':id')
  getCustomer(@Param('id') id: any) {
    return {
      message: `Customer id: ${id}`,
    };
  }

  //Create a new customer
  @Post()
  //payload is the information that the user sends through the method POST
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }
}
