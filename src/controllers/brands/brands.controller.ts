import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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

  //Edit a brand through your id
  @Put(':id')
  //We will receive new brand data through the body.
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
