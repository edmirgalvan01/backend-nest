import { Controller, Get, Param } from '@nestjs/common';

//Any method will have this path (categories), so it is not necessary to put it in the method
@Controller('categories')
export class CategoriesController {
  //This is the way to get many params from the url
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: any,
    @Param('productId') productId: any,
  ) {
    return `Category: ${categoryId} and Product: ${productId}`;
  }
}
