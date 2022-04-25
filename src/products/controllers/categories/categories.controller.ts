import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { ParseIntPipe } from '../../../common/parse-int.pipe';
import { CategoriesService } from '../../services/categories/categories.service';
import {
  CreateCategorieDto,
  UpdateCategorieDto,
} from '../../dtos/categorie.dto';

//Any method will have this path (categories), so it is not necessary to put it in the method
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get('')
  getCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: any) {
    return this.categoriesService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCategorieDto) {
    return this.categoriesService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategorieDto,
  ) {
    return this.categoriesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.delete(id);
  }
}
