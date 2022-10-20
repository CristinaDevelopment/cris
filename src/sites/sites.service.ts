import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ListInput } from 'src/common/pagination/dto/list.input';

import { GetSite } from '../sites/dto/site.args';
import {
  CreateSite,
  UpdateDataBase,
  UpdateImageSite,
  UpdateSite,
} from '../sites/dto/site.input';
import { SiteDocument } from '../sites/entities/site.schema';
import {
  SitesEcommerceRepository,
  SitesEducationRepository,
  SitesFoodRepository,
  SitesMarketingRepository,
} from '../sites/sites.repository';

@Injectable()
export class SitesService {
  constructor(
    private readonly siteEcommerceRepository: SitesEcommerceRepository,
    private readonly siteFoodRepository: SitesFoodRepository,
    private readonly siteEducationRepository: SitesEducationRepository,
    private readonly siteMarketingRepository: SitesMarketingRepository,
  ) {}

  async create(input: CreateSite, typeSite: string) {
    let data;
    switch (typeSite) {
      case 'ecommerce':
        data = await this.siteEcommerceRepository.add(input);
        break;
      case 'food':
        data = await this.siteFoodRepository.add(input);
        break;
      case 'education':
        data = await this.siteEducationRepository.add(input);
        break;
      case 'marketing':
        data = await this.siteMarketingRepository.add(input);
        break;
      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${typeSite}" page`);
    }
    // const document = await this.page0Repository.add(input);
    return this.toModel(data);
  }

  async update({ id }: GetSite, input: UpdateSite, typeSite: string) {
    // const document = await this.siteRepository.update(id, input);
    // return this.toModel(document);

    let data;
    switch (typeSite) {
      case 'ecommerce':
        data = await this.siteEcommerceRepository.update(id, input);
        break;
      case 'food':
        data = await this.siteFoodRepository.update(id, input);
        break;
      case 'education':
        data = await this.siteEducationRepository.update(id, input);
        break;
      case 'marketing':
        data = await this.siteMarketingRepository.update(id, input);
        break;
      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${typeSite}" page`);
    }
    // const document = await this.page0Repository.add(input);
    return this.toModel(data);
  }
  async updateImage(
    { id }: GetSite,
    input: UpdateImageSite,
    type: string,
    uid: string,
    typeSite: string,
  ) {
    let data;
    switch (typeSite) {
      case 'ecommerce':
        data = await this.siteEcommerceRepository.updateImage(
          id,
          input,
          type,
          uid,
        );
        break;
      case 'food':
        data = await this.siteFoodRepository.updateImage(id, input, type, uid);

        break;
      case 'education':
        data = await this.siteEducationRepository.updateImage(
          id,
          input,
          type,
          uid,
        );

        break;
      case 'marketing':
        data = await this.siteMarketingRepository.updateImage(
          id,
          input,
          type,
          uid,
        );

        break;

      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${typeSite}" page`);
    }
    // const document = await this.page0Repository.add(input);
    return this.toModel(data);
  }

  async updateDataBase(
    { id }: GetSite,
    input: UpdateDataBase[],
    typeSite: string,
  ) {
    let data;
    switch (typeSite) {
      case 'ecommerce':
        data = await this.siteEcommerceRepository.updateDB(id, input);
        break;
      case 'food':
        data = await this.siteFoodRepository.updateDB(id, input);
        break;
      case 'education':
        data = await this.siteEducationRepository.updateDB(id, input);
        break;
      case 'marketing':
        data = await this.siteMarketingRepository.updateDB(id, input);
        break;

      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${typeSite}" page`);
    }
    // const document = await this.page0Repository.add(input);
    return this.toModel(data);
  }

  async deleteSite({ id }: GetSite, typeSite: string) {
    // await this.siteRepository.deleteOne({ _id: id });
    // return id;

    switch (typeSite) {
      case 'ecommerce':
        await this.siteEcommerceRepository.deleteOne({ _id: id });
        break;
      case 'food':
        await this.siteFoodRepository.deleteOne({ _id: id });
        break;
      case 'education':
        await this.siteEducationRepository.deleteOne({ _id: id });
        break;
      case 'marketing':
        await this.siteMarketingRepository.deleteOne({ _id: id });
        break;

      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    return id;
  }

  async deleteSitesById(ids: string[], typeSite: string) {
    switch (typeSite) {
      case 'ecommerce':
        await this.siteEcommerceRepository.deleteManyPages(ids);
        break;
      case 'food':
        await this.siteFoodRepository.deleteManyPages(ids);
        break;
      case 'education':
        await this.siteEducationRepository.deleteManyPages(ids);
        break;
      case 'marketing':
        await this.siteMarketingRepository.deleteManyPages(ids);
        break;

      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    // await this.page0Repository.deleteManyPages(ids);
    return ids;
  }

  async findSite({ id }: GetSite, typeSite: string) {
    let data;
    switch (typeSite) {
      case 'ecommerce':
        data = await this.siteEcommerceRepository.findOne({ _id: id });
        break;
      case 'food':
        data = await this.siteFoodRepository.findOne({ _id: id });
        break;
      case 'education':
        data = await this.siteEducationRepository.findOne({ _id: id });
        break;
      case 'marketing':
        data = await this.siteMarketingRepository.findOne({ _id: id });
        break;

      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${typeSite}" page`);
    }
    return this.toModel(data);
  }

  findSites(typeSite: string) {
    let data;
    switch (typeSite) {
      case 'ecommerce':
        data = this.siteEcommerceRepository.find({});
        break;
      case 'food':
        data = this.siteFoodRepository.find({});
        break;
      case 'education':
        data = this.siteEducationRepository.find({});
        break;
      case 'marketing':
        data = this.siteMarketingRepository.find({});
        break;

      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(`there is no "${typeSite}" page`);
    }
    return data;
  }

  all(pagination: ListInput, typeSite: string) {
    let data;
    switch (typeSite) {
      case 'ecommerce':
        data = this.siteEcommerceRepository.All(pagination, {
          'data.type': typeSite,
        });
        break;
      case 'food':
        data = this.siteFoodRepository.All(pagination, {
          'data.type': typeSite,
        });
        break;
      case 'education':
        data = this.siteEducationRepository.All(pagination, {
          'data.type': typeSite,
        });
        break;
      case 'marketing':
        data = this.siteMarketingRepository.All(pagination, {
          'data.type': typeSite,
        });
        break;

      default:
        data = [];
        break;
    }
    if (!data) {
      throw new UnprocessableEntityException(
        `there is no "${typeSite}" category`,
      );
    }
    return data;
  }

  private toModel(siteDocument: SiteDocument) {
    return {
      _id: siteDocument._id.toHexString(),
      data: siteDocument.data,
      url: siteDocument.url,
    };
  }
}
