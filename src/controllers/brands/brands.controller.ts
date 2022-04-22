import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('')
  getBrands(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return `Brands: ${limit} - ${offset}`;
  }

  @Get(':id')
  getBrand(@Param('id') id: any) {
    return `Brand id: ${id}`;
  }
}
