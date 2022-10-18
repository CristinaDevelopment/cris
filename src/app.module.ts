import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './config/common.module';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [PagesModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
