import { Controller, Get, Param, Query } from '@nestjs/common';

//Any method will have this path (categories), so it is not necessary to put it in the method
@Controller('categories')
export class CategoriesController {
  @Get('')
  getCategories(@Query('limit') limit = 30, @Query('offset') offset: number) {
    return {
      message: `Categories: ${limit} - ${offset}`,
    };
  }

  @Get(':id')
  getCategory(@Param('id') id: any) {
    return {
      message: `Category id: ${id}`,
    };
  }
}
