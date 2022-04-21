import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mundo!';
  }

  //This is the way to create a endpoint in Nest
  @Get('new')
  newEndpoint() {
    return 'Este es un nuevo endpoint';
  }

  //This is the way to create a endpoint getting params from the url
  @Get('products/:id')
  //<functionName>(@Param(<paramAlias>) <paramName>: <typeOfParam>)
  getProduct(@Param('id') id: any) {
    return `Product: ${id}`;
  }

  //This is the way to get many params from the url
  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: any,
    @Param('productId') productId: any,
  ) {
    return `Category: ${categoryId} and Product: ${productId}`;
  }
}
