import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './config/common.module';
import { PagesModule } from './pages/pages.module';
import { ProductsModule } from './products/products.module';
import { UploadsModule } from './uploads/uploads.module';
import { APP_PIPE } from '@nestjs/core';
import { SitesModule } from './sites/sites.module';

@Module({
  imports: [
    PagesModule,
    SitesModule,
    CommonModule,
    ProductsModule,
    UploadsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
