import {
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { FilterQuery, Model, Types, UpdateQuery } from 'mongoose';
import { ListInput } from '../pagination/dto/list.input';
import { AbstractDocument } from './abstract.schema';
// import { CreatePage, UpdatePage } from '../../pages/dto/page.input';
import { capitalizar, slug } from 'utils/function';
import { CreatePage, UpdateImage, UpdatePage } from 'src/pages/dto/page.input';
import {
  CreateSite,
  UpdateDataBase,
  UpdateImageSite,
  UpdateSite,
} from 'src/sites/dto/site.input';
import { uuidv3 } from 'utils';
// import { UpdateImage } from 'src/product/dto/product.input';

export abstract class AbstractRepositorySite<
  TDocument extends AbstractDocument,
> {
  protected abstract readonly logger: Logger;

  constructor(protected readonly model: Model<TDocument>) {}

  // async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
  //   const createdDocument = new this.model({
  //     ...document,
  //     _id: new Types.ObjectId(),
  //   });
  //   return (await createdDocument.save()).toJSON() as unknown as TDocument;
  // }
  async add(input: CreateSite): Promise<TDocument> {
    const createdDocument = new this.model(this.siteCreated(input));
    return (await createdDocument.save()).toJSON() as unknown as TDocument;
  }

  async update(
    id: string,
    input: UpdateSite,
    options: Record<string, unknown> = { lean: true, new: true },
  ) {
    const document = await this.model.findOneAndUpdate(
      { _id: id },
      this.siteUpdate(input),
      options,
    );
    if (!document) {
      // this.logger.warn(`Document not found with filterQuery:`, filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }
  async updateDB(
    id: string,
    input: UpdateDataBase[],
    options: Record<string, unknown> = { lean: true, new: true },
  ) {
    const document = await this.model.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          'data.dataBase': input.map((data) => ({
            uid: uuidv3(), 
            label: capitalizar(data.type),
            value: slug(data.type),
          })),
        },
      },
      options,
    );
    if (!document) {
      // this.logger.warn(`Document not found with filterQuery:`, filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }

  async updateImage(
    id: string,
    input: UpdateImage,
    uid: string,
    type: string,
    options: Record<string, unknown> = { lean: true, new: true },
  ) {
    const document = await this.model.findOneAndUpdate(
      { _id: id },
      this.siteImage(input, uid, type),
      options,
    );
    if (!document) {
      // this.logger.warn(`Document not found with filterQuery:`, filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }
  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery, {}, { lean: true });

    if (!document) {
      this.logger.warn('Document not found with filterQuery', filterQuery);
      throw new NotFoundException('Document not found.');
    }
    return document;
  }

  // async findOneAndUpdate(
  //   filterQuery: FilterQuery<TDocument>,
  //   update: UpdateQuery<TDocument>,
  //   options: Record<string, unknown> = { lean: true, new: true },
  // ) {
  //   const document = await this.model.findOneAndUpdate(
  //     filterQuery,
  //     update,
  //     options,
  //   );
  //   if (!document) {
  //     this.logger.warn(`Document not found with filterQuery:`, filterQuery);
  //     throw new NotFoundException('Document not found.');
  //   }
  //   return document;
  // }

  // async updateMany(
  //   filterQuery: FilterQuery<TDocument>,
  //   update: UpdateQuery<TDocument>,
  // ) {
  //   const document = await this.model.updateMany(
  //     { siteId: filterQuery.siteId },
  //     { $set: update },
  //   );
  //   return document;
  // }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery, {}, { lean: true });
  }

  async deleteOne(filterQuery: FilterQuery<TDocument>) {
    return this.model.deleteOne(filterQuery);
  }

  async deleteMany(filterQuery: FilterQuery<TDocument>) {
    return this.model.deleteMany(filterQuery);
  }

  async deleteManyPages(ids: string[]) {
    return this.model.deleteMany({ _id: { $in: ids } });
  }
  // async deleteManyPagesByParent(ids: string[]) {
  //   return this.model.deleteMany({ parent: { $in: ids } });
  // }
  // async deleteManyPagesByParentCron(ids: string[]) {
  //   return this.model.deleteMany({ parent: { $nin: ids } });
  // }

  findAll(paginationQuery: ListInput, filterQuery: FilterQuery<TDocument>) {
    const { limit, offset } = paginationQuery;
    return this.model
      .find(filterQuery, {}, { lean: true })
      .sort({ 'data.updateDate.createdAt': 1 })
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async All(paginationQuery: ListInput, filterQuery: FilterQuery<TDocument>) {
    const count = await this.model.count();
    const data = await this.findAll(paginationQuery, filterQuery);
    return { data, count };
  }

  // async findOneBySlug(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
  //   const document = await this.model.findOne(filterQuery, {}, { lean: true });

  //   if (document) {
  //     // this.logger.warn('Document not found with filterQuery', filterQuery);
  //     throw new UnprocessableEntityException(
  //       'You already have an item registered with that name',
  //     );
  //   }
  //   return;
  // }
  private siteCreated({
    domain,
    name,
    description,
    type,
    client,
    uid,
  }: CreateSite) {
    const web = domain.split('.');
    const nameDomain = web[0];
    web.shift();
    const dlt = web.join('.');
    return {
      _id: new Types.ObjectId(),
      data: {
        name: name,
        description: description,
        dataBase: [],
        users: [],
        domain: {
          name: nameDomain,
          dlt: dlt,
        },
        type: type,
        seo: {
          title: name,
          href: '#',
          description: description,
        },
        client: client,
        updateDate: {
          createdAt: new Date(),
          register: [
            {
              uid: uid,
              change: 'created',
              updatedAt: new Date(),
            },
          ],
        },
      },
      url: domain,
    };
  }
  private siteUpdate({
    domain,
    name,
    description,
    type,
    uid,
    change,
  }: UpdateSite) {
    const web = domain.split('.');
    const nameDomain = web[0];
    web.shift();
    const dlt = web.join('.');
    return {
      $set: {
        'data.name': name,
        'data.domain': {
          name: nameDomain,
          dlt: dlt,
        },
        'data.description': description,
        'data.type': type,
        'data.seo.title': name,
        'data.seo.href': '',
        'data.seo.description': description,
        url: domain,
      },
      $push: {
        'data.updateDate.register': {
          uid: uid,
          change: change,
          updatedAt: new Date(),
        },
      },
    };
  }
  private siteImage({ src, alt }: UpdateImageSite, uid: string, type: string) {
    return {
      $set:
        type === 'logo'
          ? {
              'data.logo': {
                src: src,
                alt: alt,
              },
            }
          : type === 'site'
          ? {
              'data.banner': {
                src: src,
                alt: alt,
              },
              'data.seo.image.src': src,
              'data.seo.image.alt': alt,
            }
          : {
              'data.icon': {
                src: src,
                alt: alt,
              },
            },
      $push: {
        'data.updateDate.register': {
          uid: uid,
          change: `${type} image update`,
          updatedAt: new Date(),
        },
      },
    };
  }
}
