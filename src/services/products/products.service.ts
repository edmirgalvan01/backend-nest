import { Injectable } from '@nestjs/common';

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
      name: 'Hamburguesas',
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
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
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

  edit(id: number, payload: any) {
    const productEdit = this.products.findIndex((p) => p.id === id);
    this.products[productEdit] = {
      id: id,
      ...payload,
    };
  }

  delete(id: number) {
    const productDelete = this.products.findIndex((p) => p.id === id);
    this.products.splice(productDelete, 1);
  }
}
