import { Module } from '@nestjs/common';
import { BrandsController } from './controllers/brands/brands.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { ProductsController } from './controllers/products/products.controller';
import { BrandsService } from './services/brands/brands.service';
import { CategoriesService } from './services/categories/categories.service';
import { OrdersService } from './services/orders/orders.service';
import { ProductsService } from './services/products/products.service';

@Module({})
export class ProductsModule {
  controllers: [
    BrandsController,
    CategoriesController,
    OrdersController,
    ProductsController,
  ];
  providers: [BrandsService, CategoriesService, OrdersService, ProductsService];
}
