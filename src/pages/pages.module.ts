import { Module } from '@nestjs/common';
import { PagesEcommerceService } from './ecommerce/pages.ecommerce.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Page0, Page1, Page2 } from './entities/page.model';
import { Page0Schema, Page1Schema, Page2Schema } from './entities/page.schema';
import {
  Pages0EcommerceResolver,
  Pages1EcommerceResolver,
  Pages2EcommerceResolver,
} from './ecommerce/resolvers';
import {
  Pages0EcommerceRepository,
  Pages1EcommerceRepository,
  Pages2EcommerceRepository,
} from './ecommerce/pages.ecommerce.repository';
import { PagesFoodService } from './food/pages.food.service';
import {
  Pages0FoodResolver,
  Pages1FoodResolver,
  Pages2FoodResolver,
} from './food/resolvers';
import {
  Pages0FoodRepository,
  Pages1FoodRepository,
  Pages2FoodRepository,
} from './food/pages.food.repository';
import { PagesMarketingService } from './marketing/pages.marketing.service';
import {
  Pages0MarketingResolver,
  Pages1MarketingResolver,
  Pages2MarketingResolver,
} from './marketing/resolvers';
import {
  Pages0MarketingRepository,
  Pages1MarketingRepository,
  Pages2MarketingRepository,
} from './marketing/pages.marketing.repository';
import { PagesEducationService } from './education/pages.education.service';
import {
  Pages0EducationResolver,
  Pages1EducationResolver,
  Pages2EducationResolver,
} from './education/resolvers';
import {
  Pages0EducationRepository,
  Pages1EducationRepository,
  Pages2EducationRepository,
} from './education/pages.education.repository';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Page0.name, schema: Page0Schema }],
      'pagesEcommerceDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page1.name, schema: Page1Schema }],
      'pagesEcommerceDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page2.name, schema: Page2Schema }],
      'pagesEcommerceDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page0.name, schema: Page0Schema }],
      'pagesFoodDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page1.name, schema: Page1Schema }],
      'pagesFoodDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page2.name, schema: Page2Schema }],
      'pagesFoodDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page0.name, schema: Page0Schema }],
      'pagesMarketingDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page1.name, schema: Page1Schema }],
      'pagesMarketingDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page2.name, schema: Page2Schema }],
      'pagesMarketingDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page0.name, schema: Page0Schema }],
      'pagesEducationDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page1.name, schema: Page1Schema }],
      'pagesEducationDB',
    ),
    MongooseModule.forFeature(
      [{ name: Page2.name, schema: Page2Schema }],
      'pagesEducationDB',
    ),
  ],
  providers: [
    PagesEcommerceService,
    Pages0EcommerceResolver,
    Pages1EcommerceResolver,
    Pages2EcommerceResolver,
    Pages0EcommerceRepository,
    Pages1EcommerceRepository,
    Pages2EcommerceRepository,
    PagesFoodService,
    Pages0FoodResolver,
    Pages1FoodResolver,
    Pages2FoodResolver,
    Pages0FoodRepository,
    Pages1FoodRepository,
    Pages2FoodRepository,
    PagesMarketingService,
    Pages0MarketingResolver,
    Pages1MarketingResolver,
    Pages2MarketingResolver,
    Pages0MarketingRepository,
    Pages1MarketingRepository,
    Pages2MarketingRepository,
    PagesEducationService,
    Pages0EducationResolver,
    Pages1EducationResolver,
    Pages2EducationResolver,
    Pages0EducationRepository,
    Pages1EducationRepository,
    Pages2EducationRepository,
    PagesEducationService,
  ],
  exports: [
    PagesEcommerceService,
    Pages0EcommerceRepository,
    Pages1EcommerceRepository,
    Pages2EcommerceRepository,
    PagesFoodService,
    Pages0FoodRepository,
    Pages1FoodRepository,
    Pages2FoodRepository,
    PagesMarketingService,
    Pages0MarketingRepository,
    Pages1MarketingRepository,
    Pages2MarketingRepository,
    PagesEducationService,
    Pages0EducationRepository,
    Pages1EducationRepository,
    Pages2EducationRepository,
  ],
})
export class PagesModule {}
