import { Injectable, NotFoundException } from '@nestjs/common';
import { Categorie } from '../../entities/categorie.entity';
import {
  CreateCategorieDto,
  UpdateCategorieDto,
} from '../../dtos/categorie.dto';

@Injectable()
export class CategoriesService {
  private counterId = 1;

  private categories: Categorie[] = [
    {
      id: 1,
      name: 'Tecnologia',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const categorie = this.categories.find((c) => c.id === id);

    if (!categorie) {
      throw new NotFoundException(`Categorie #${id} not found`);
    }

    return categorie;
  }

  create(payload: CreateCategorieDto) {
    this.counterId = this.counterId + 1;

    const newCategorie = {
      id: this.counterId,
      ...payload,
    };

    this.categories.push(newCategorie);

    return newCategorie;
  }

  update(id: number, payload: UpdateCategorieDto) {
    const categorie = this.findOne(id);

    if (categorie) {
      const indexCategorie = this.categories.findIndex((c) => c.id === id);
      this.categories[indexCategorie] = {
        ...categorie,
        ...payload,
      };
      return this.categories[indexCategorie];
    } else {
      return null;
    }
  }

  delete(id: number) {
    const categorie = this.findOne(id);

    if (categorie) {
      const indexCategorie = this.categories.findIndex((c) => c.id === id);
      this.categories.splice(indexCategorie, 1);

      return { message: true };
    } else {
      return { message: false };
    }
  }
}
