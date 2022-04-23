import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../../dtos/products.dto';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
  //Counter to manage product id
  private counterId = 1;

  //Data to example
  //We use the product template to create a product
  private products: Product[] = [
    {
      id: 1,
      name: 'Hamburguesa',
      price: 35,
      description: 'Una hamburguesa muy sabrosa',
      stock: 10,
      img: 'https://unsplash.com/photos/sc5sTPMrVfk',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    //We use error first
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    console.log(payload);
    //We increment the counter id
    this.counterId = this.counterId + 1;

    //We create a new product
    const newProduct = {
      //We pass the incremented id
      id: this.counterId,
      //We make a copy of the product information received through payload
      ...payload,
    };
    //We add the new product to the array of products
    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    //We reuse the existing code to find the product through its id
    const product = this.findOne(id);
    if (product) {
      //We find product index
      const indexProduct = this.products.findIndex((p) => p.id === id);
      //We merge the old product and the new product
      this.products[indexProduct] = {
        ...product,
        ...payload,
      };

      return this.products[indexProduct];
    } else {
      return null;
    }
  }

  delete(id: number) {
    const product = this.findOne(id);
    if (product) {
      const indexProduct = this.products.findIndex((p) => p.id === id);
      this.products.splice(indexProduct, 1);

      return { message: true };
    } else {
      return { message: false };
    }
  }
}
