import { Module } from '@nestjs/common';
import { ProductsWearService } from './wear/products.wear.service';
import { ProductsWearResolver } from './wear/products.wear.resolver';
import { ProductsFoodResolver } from './food/products.food.resolver';
import { ProductsFoodService } from './food/products.food.service';

@Module({
  providers: [
    ProductsWearResolver,
    ProductsWearService,
    ProductsFoodResolver,
    ProductsFoodService,
  ],
})
export class ProductsModule {}
