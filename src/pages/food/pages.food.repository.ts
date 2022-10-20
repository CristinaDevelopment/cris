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
export class Pages0FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages0FoodRepository.name);
  constructor(
    @InjectModel(Page0.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages1FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages1FoodRepository.name);
  constructor(
    @InjectModel(Page1.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages2FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages2FoodRepository.name);
  constructor(
    @InjectModel(Page2.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}

@Injectable()
export class Pages3FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages3FoodRepository.name);
  constructor(
    @InjectModel(Page3.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages4FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages4FoodRepository.name);
  constructor(
    @InjectModel(Page4.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages5FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages5FoodRepository.name);
  constructor(
    @InjectModel(Page5.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages6FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages6FoodRepository.name);
  constructor(
    @InjectModel(Page6.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages7FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages7FoodRepository.name);
  constructor(
    @InjectModel(Page7.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages8FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages8FoodRepository.name);
  constructor(
    @InjectModel(Page8.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages9FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages9FoodRepository.name);
  constructor(
    @InjectModel(Page9.name, 'pagesFoodDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages10FoodRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages10FoodRepository.name);
  constructor(
    @InjectModel(Page10.name, 'pagesFoodDB')
    pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
