import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ListInput } from 'src/common/pagination/dto/list.input';
import { GetPage } from '../dto/page.args';
import { CreatePage, UpdateImage, UpdatePage } from '../dto/page.input';
import { PageDocument } from '../entities/page.schema';
import {
  Pages0MarketingRepository,
  Pages1MarketingRepository,
  Pages2MarketingRepository,
} from './pages.marketing.repository';

@Injectable()
export class PagesMarketingService {
  constructor(
    private readonly page0Repository: Pages0MarketingRepository,
    private readonly page1Repository: Pages1MarketingRepository,
    private readonly page2Repository: Pages2MarketingRepository,
  ) {}
  async create(input: CreatePage, type: string) {
    let data;
    switch (type) {
      case 'page0':
        data = await this.page0Repository.add(input);
        break;
      case 'page1':
        data = await this.page1Repository.add(input);
        break;
      case 'page2':
        data = await this.page2Repository.add(input);
        break;

      default:
        console.log(`Sorry, we are out of ${type}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${type}" page`);
    }
    // const document = await this.page0Repository.add(input);
    return this.toModel(data);
  }

  async update({ id }: GetPage, input: UpdatePage, type: string) {
    // const document = await this.page0Repository.update(id, input);
    let data;
    switch (type) {
      case 'page0':
        data = await this.page0Repository.update(id, input);
        break;
      case 'page1':
        data = await this.page1Repository.update(id, input);
        break;
      case 'page2':
        data = await this.page2Repository.update(id, input);
        break;

      default:
        console.log(`Sorry, we are out of ${type}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${type}" page`);
    }
    // const document = await this.page0Repository.add(input);
    return this.toModel(data);
  }

  async updateImage(
    { id }: GetPage,
    input: UpdateImage,
    uid: string,
    type: string,
  ) {
    let data;
    switch (type) {
      case 'page0':
        data = await this.page0Repository.updateImage(id, input, uid);
        break;
      case 'page1':
        data = await this.page1Repository.updateImage(id, input, uid);
        break;
      case 'page2':
        data = await this.page2Repository.updateImage(id, input, uid);
        break;

      default:
        console.log(`Sorry, we are out of ${type}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${type}" page`);
    }
    return this.toModel(data);
  }

  async findPage({ id }: GetPage, type: string) {
    let data;
    switch (type) {
      case 'page0':
        data = await this.page0Repository.findOne({ _id: id });
        break;
      case 'page1':
        data = await this.page1Repository.findOne({ _id: id });
        break;
      case 'page2':
        data = await this.page2Repository.findOne({ _id: id });
        break;
      default:
        console.log(`Sorry, we are out of ${type}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${type}" page`);
    }
    return this.toModel(data);
  }

  // async findPageBySlug(site: string, slug: string) {
  //   const document = await this.page0Repository.findOne({
  //     site: site,
  //     slug: slug,
  //   });
  //   return this.toModel(document);
  // }

  // findPagesBySite({ siteId }: GetSite) {
  //   return this.page0Repository.find({ siteId: siteId });
  // }

  findPages(type: string) {
    let data;
    switch (type) {
      case 'page0':
        data = this.page0Repository.find({});
        break;
      case 'page1':
        data = this.page1Repository.find({});
        break;
      case 'page2':
        data = this.page2Repository.find({});
        break;

      default:
        console.log(`Sorry, we are out of ${type}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${type}" page`);
    }
    return data;
  }

  async deletePage({ id }: GetPage, type: string) {
    // await this.page0Repository.deleteOne({ _id: id });
    switch (type) {
      case 'page0':
        await this.page0Repository.deleteOne({ _id: id });
        break;
      case 'page1':
        await this.page1Repository.deleteOne({ _id: id });
        break;
      case 'page2':
        await this.page2Repository.deleteOne({ _id: id });
        break;

      default:
        console.log(`Sorry, we are out of ${type}.`);
        break;
    }
    return id;
  }

  // async deletePagesByParent(ids: string[]) {
  //   await this.page0Repository.deleteManyPagesByParent(ids);
  //   return ids;
  // }

  // async deletePagesByParentCron(ids: string[]) {
  //   await this.page0Repository.deleteManyPagesByParentCron(ids);
  //   return ids;
  // }

  async deletePagesById(ids: string[], type: string) {
    switch (type) {
      case 'page0':
        await this.page0Repository.deleteManyPages(ids);
        break;
      case 'page1':
        await this.page1Repository.deleteManyPages(ids);
        break;
      case 'page2':
        await this.page2Repository.deleteManyPages(ids);
        break;

      default:
        console.log(`Sorry, we are out of ${type}.`);
        break;
    }
    // await this.page0Repository.deleteManyPages(ids);
    return ids;
  }

  findPagesByParentId(parentId: string, type: string) {
    let data;
    switch (type) {
      case 'page0':
        data = this.page0Repository.find({ parentId: parentId });
        break;
      case 'page1':
        data = this.page1Repository.find({ parentId: parentId });
        break;
      case 'page2':
        data = this.page2Repository.find({ parentId: parentId });
        break;

      default:
        data = [];
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${type}" category`);
    }
    return data;
  }

  all(pagination: ListInput, parentId: string, type: string) {
    // return this.page0Repository.All(pagination, { parent: parentId });
    let data;
    switch (type) {
      case 'page0':
        data = this.page0Repository.All(pagination, { parentId: parentId });
        break;
      case 'page1':
        data = this.page1Repository.All(pagination, { parentId: parentId });
        break;
      case 'page2':
        data = this.page2Repository.All(pagination, { parentId: parentId });
        break;

      default:
        data = [];
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${type}" category`);
    }
    return data;
  }

  findPages0ByParentId(parentId: string) {
    return this.page0Repository.find({ parentId: parentId });
  }
  findPages1ByParentId(parentId: string) {
    return this.page1Repository.find({ parentId: parentId });
  }
  findPages2ByParentId(parentId: string) {
    return this.page2Repository.find({ parentId: parentId });
  }

  private toModel({ _id, data, siteId, parentId, slug }: PageDocument) {
    return {
      _id: _id.toHexString(),
      data: data,
      siteId: siteId,
      parentId: parentId,
      slug: slug,
    };
  }
}
