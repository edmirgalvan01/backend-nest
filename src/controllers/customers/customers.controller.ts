import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get('')
  getCustomers(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return `Customers: ${limit} - ${offset}`;
  }

  @Get(':id')
  getCustomer(@Param('id') id: any) {
    return `Customer id: ${id}`;
  }
}
