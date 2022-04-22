import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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

  //Create a new categorie
  @Post()
  //payload is the information that the user sends through the method POST
  create(@Body() payload: any) {
    return {
      message: 'Accion de crear',
      payload,
    };
  }

  //Edit a category through your id
  @Put(':id')
  //We will receive new category data through the body.
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
