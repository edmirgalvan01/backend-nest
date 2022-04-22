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
  //Res,
} from '@nestjs/common';

//import { Response } from 'express';

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
  //This is the way to create a status code for the request
  @HttpCode(HttpStatus.ACCEPTED)
  //<functionName>(@Param(<paramName>) <paramName>: <typeOfParam>)
  getOne(@Param('id') id: any) {
    return {
      message: `Product: ${id}`,
    };
  }

  //This is the way express wants to respond to your request
  // @Get(':id')
  // @HttpCode(HttpStatus.ACCEPTED)
  // getOneExpress(@Res() response: Response, @Param('id') id: any) {
  //   response.status(200).send({
  //     message: `Product: ${id}`,
  //   });
  // }

  //Create a new product
  @Post()
  //payload is the information that the user sends through the method POST
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }

  //Edit a product through your id
  @Put(':id')
  //We will receive new product data through the body.
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
