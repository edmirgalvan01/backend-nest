import { Controller, Get, Query, Param } from '@nestjs/common';

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
}
