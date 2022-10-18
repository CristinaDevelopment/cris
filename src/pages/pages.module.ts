import { Module } from '@nestjs/common';
import { PagesEcommerceService } from './ecommerce/pages.ecommerce.service';
import { PagesEcommerceResolver } from './ecommerce/pages.ecommer.resolver';
import { PagesFoodResolver } from './meal/pages.food.resolver';
import { PagesFoodService } from './meal/pages.food.service';

@Module({
  providers: [
    PagesEcommerceResolver,
    PagesEcommerceService,
    PagesFoodResolver,
    PagesFoodService,
  ],
})
export class PagesModule {}
