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

  //Edit a customer through your id
  @Put(':id')
  //We will receive new customer data through the body.
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
