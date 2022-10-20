import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesResolver } from './sites.resolver';
import {
  SitesEcommerceRepository,
  SitesEducationRepository,
  SitesFoodRepository,
  SitesMarketingRepository,
} from './sites.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Site } from './entities/site.model';
import { SiteSchema } from './entities/site.schema';
import { PagesModule } from 'src/pages/pages.module';
import { TasksService } from './task.service';

@Module({
  imports: [
    // ProductModule,
    PagesModule,
    // BlogModule,
    MongooseModule.forFeature(
      [{ name: Site.name, schema: SiteSchema }],
      'sitesEcommerceDB',
    ),
    MongooseModule.forFeature(
      [{ name: Site.name, schema: SiteSchema }],
      'sitesFoodDB',
    ),
    MongooseModule.forFeature(
      [{ name: Site.name, schema: SiteSchema }],
      'sitesEducationDB',
    ),
    MongooseModule.forFeature(
      [{ name: Site.name, schema: SiteSchema }],
      'sitesMarketingDB',
    ),
  ],
  providers: [
    SitesResolver,
    SitesService,
    SitesEcommerceRepository,
    SitesFoodRepository,
    SitesEducationRepository,
    SitesMarketingRepository,
    TasksService,
  ],
})
export class SitesModule {}
