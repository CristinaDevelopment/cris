import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AbstractRepository,
  AbstractRepositoryPage,
} from 'src/common/abstract';
import {
  Page0,
  Page1,
  Page10,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
} from '../entities/page.model';
import { PageDocument } from '../entities/page.schema';

@Injectable()
export class Pages0MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages0MarketingRepository.name);
  constructor(
    @InjectModel(Page0.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages1MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages1MarketingRepository.name);
  constructor(
    @InjectModel(Page1.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages2MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages2MarketingRepository.name);
  constructor(
    @InjectModel(Page2.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}

@Injectable()
export class Pages3MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages3MarketingRepository.name);
  constructor(
    @InjectModel(Page3.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages4MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages4MarketingRepository.name);
  constructor(
    @InjectModel(Page4.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages5MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages5MarketingRepository.name);
  constructor(
    @InjectModel(Page5.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages6MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages6MarketingRepository.name);
  constructor(
    @InjectModel(Page6.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages7MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages7MarketingRepository.name);
  constructor(
    @InjectModel(Page7.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages8MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages8MarketingRepository.name);
  constructor(
    @InjectModel(Page8.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages9MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages9MarketingRepository.name);
  constructor(
    @InjectModel(Page9.name, 'pagesMarketingDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages10MarketingRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages10MarketingRepository.name);
  constructor(
    @InjectModel(Page10.name, 'pagesMarketingDB')
    pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
