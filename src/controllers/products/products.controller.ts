import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

//Any method will have this path (products), so it is not necessary to put it in the method
@Controller('products')
export class ProductsController {
  @Get('')
  //<functionName>(@Query(<paramName>) <paramName>: <typeOfParam>)
  getAll(
    //we can define default params
    @Query('limit') limit = 100,
    @Query('offset') offset: number,
  ) {
    return {
      message: `Products: limit:${limit} and offset:${offset}`,
    };
  }

  //This is the way to create a endpoint getting params from the url
  @Get(':id')
  //<functionName>(@Param(<paramName>) <paramName>: <typeOfParam>)
  getOne(@Param('id') id: any) {
    return {
      message: `Product: ${id}`,
    };
  }

  //Create a new product
  @Post()
  //payload is the information that the user sends through the method POST
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }
}
