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
export class Pages0EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages0EducationRepository.name);
  constructor(
    @InjectModel(Page0.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages1EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages1EducationRepository.name);
  constructor(
    @InjectModel(Page1.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages2EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages2EducationRepository.name);
  constructor(
    @InjectModel(Page2.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}

@Injectable()
export class Pages3EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages3EducationRepository.name);
  constructor(
    @InjectModel(Page3.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages4EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages4EducationRepository.name);
  constructor(
    @InjectModel(Page4.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages5EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages5EducationRepository.name);
  constructor(
    @InjectModel(Page5.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages6EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages6EducationRepository.name);
  constructor(
    @InjectModel(Page6.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages7EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages7EducationRepository.name);
  constructor(
    @InjectModel(Page7.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages8EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages8EducationRepository.name);
  constructor(
    @InjectModel(Page8.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages9EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages9EducationRepository.name);
  constructor(
    @InjectModel(Page9.name, 'pagesEducationDB') pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
@Injectable()
export class Pages10EducationRepository extends AbstractRepositoryPage<PageDocument> {
  protected readonly logger = new Logger(Pages10EducationRepository.name);
  constructor(
    @InjectModel(Page10.name, 'pagesEducationDB')
    pageModel: Model<PageDocument>,
  ) {
    super(pageModel);
  }
}
