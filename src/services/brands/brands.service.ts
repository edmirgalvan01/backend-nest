import { Injectable, NotFoundException } from '@nestjs/common';
import { Brand } from '../../entities/brand.entity';
import { CreateBrandDto, UpdateBrandDto } from '../../dtos/brand.dto';

@Injectable()
export class BrandsService {
  private counterId = 1;

  private brands: Brand[] = [
    {
      id: 1,
      name: 'Adidas',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);

    if (!brand) {
      throw new NotFoundException(`brand #${id} not found`);
    }
    return brand;
  }

  create(payload: CreateBrandDto) {
    this.counterId = this.counterId + 1;

    const newBrand = {
      id: this.counterId,
      ...payload,
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  update(id: number, payload: UpdateBrandDto) {
    const brand = this.findOne(id);

    if (brand) {
      const indexBrand = this.brands.findIndex((p) => p.id === id);
      this.brands[indexBrand] = {
        ...brand,
        ...payload,
      };

      return this.brands[indexBrand];
    } else {
      return null;
    }
  }

  delete(id: number) {
    const brand = this.findOne(id);
    if (brand) {
      const indexBrand = this.brands.findIndex((p) => p.id === id);
      this.brands.splice(indexBrand, 1);

      return { message: true };
    } else {
      return { message: false };
    }
  }
}
