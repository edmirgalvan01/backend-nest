import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('')
  getBrands(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return {
      message: `Brands: ${limit} - ${offset}`,
    };
  }

  @Get(':id')
  getBrand(@Param('id') id: any) {
    return {
      message: `Brand  id: ${id}`,
    };
  }

  //Create a new brand
  @Post()
  //payload is the information that the user sends through the method POST
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }
}
