import { Controller, Get, Param, Query } from '@nestjs/common';

//Any method will have this path (products), so it is not necessary to put it in the method
@Controller('products')
export class ProductsController {
  @Get('')
  //<functionName>(@Query(<paramName>) <paramName>: <typeOfParam>)
  getProducts(
    //we can define default params
    @Query('limit') limit = 100,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `Products: limit:${limit}, offset:${offset} and brand ${brand}`;
  }

  //This is the way to create a endpoint getting params from the url
  @Get(':id')
  //<functionName>(@Param(<paramName>) <paramName>: <typeOfParam>)
  getProduct(@Param('id') id: any) {
    return `Product: ${id}`;
  }
}
