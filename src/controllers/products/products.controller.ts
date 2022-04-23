import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  //Res,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';

//import { Response } from 'express';

//Any method will have this path (products), so it is not necessary to put it in the method
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get('')
  //<functionName>(@Query(<paramName>) <paramName>: <typeOfParam>)
  getAll(
    //we can define default params
    @Query('limit') limit = 100,
    @Query('offset') offset: number,
  ) {
    return this.productsService.findAll();
  }

  //This is the way to create a endpoint getting params from the url
  @Get(':id')
  //This is the way to create a status code for the request
  @HttpCode(HttpStatus.ACCEPTED)
  //<functionName>(@Param(<paramName>) <paramName>: <typeOfParam>)
  //ParseIntPipe allows us to parse the id to integer
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  //Create a new product
  @Post()
  //payload is the information that the user sends through the method POST
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  //Edit a product through your id
  @Put(':id')
  //We will receive new product data through the body.
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
