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
export class Pages0EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages0EcommerceRepository.name);
  constructor(
    @InjectModel(Page0.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages1EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages1EcommerceRepository.name);
  constructor(
    @InjectModel(Page1.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages2EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages2EcommerceRepository.name);
  constructor(
    @InjectModel(Page2.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}

@Injectable()
export class Pages3EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages3EcommerceRepository.name);
  constructor(
    @InjectModel(Page3.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages4EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages4EcommerceRepository.name);
  constructor(
    @InjectModel(Page4.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages5EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages5EcommerceRepository.name);
  constructor(
    @InjectModel(Page5.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages6EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages6EcommerceRepository.name);
  constructor(
    @InjectModel(Page6.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages7EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages7EcommerceRepository.name);
  constructor(
    @InjectModel(Page7.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages8EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages8EcommerceRepository.name);
  constructor(
    @InjectModel(Page8.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages9EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages9EcommerceRepository.name);
  constructor(
    @InjectModel(Page9.name, 'pagesEcommerceDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages10EcommerceRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages10EcommerceRepository.name);
  constructor(
    @InjectModel(Page10.name, 'pagesEcommerceDB')
    pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
