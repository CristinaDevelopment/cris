import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { GetSite } from '../sites/dto/site.args';
import {
  CreateSite,
  UpdateImageSite,
  UpdateSite,
} from '../sites/dto/site.input';
import { Data, ListSiteResponse, Site } from '../sites/entities/site.model';
import { SitesService } from './sites.service';
import { Page0 } from '../pages/entities/page.model';
import { ListInput } from 'src/common/pagination/dto/list.input';
import ConnectionArgs, {
  getPagingParameters,
} from 'src/common/pagination/relay/connection.args';
import { connectionFromArraySlice } from 'graphql-relay';
import { UpdateDataBase } from '../sites/dto/site.input';
import { PagesEcommerceService } from 'src/pages/ecommerce/pages.ecommerce.service';
import { PagesFoodService } from 'src/pages/food/pages.food.service';
import { PagesMarketingService } from 'src/pages/marketing/pages.marketing.service';
import { PagesEducationService } from 'src/pages/education/pages.education.service';

@Resolver(() => Site)
export class SitesResolver {
  constructor(
    private readonly siteService: SitesService,
    private readonly page0EcommerceService: PagesEcommerceService,
    private readonly page0FoodService: PagesFoodService,
    private readonly page0MarketingService: PagesMarketingService,
    private readonly page0EducationService: PagesEducationService,
  ) {}

  @Mutation(() => Site, { name: 'createSite' })
  async create(
    @Args('input') input: CreateSite,
    @Args('typeSite') typeSite: string,
  ) {
    const document = await this.siteService.create(input, typeSite);
    switch (typeSite) {
      case 'ecommerce':
        this.page0EcommerceService.create(this.page0(document._id), 'page0');
        break;
      case 'food':
        this.page0FoodService.create(this.page0(document._id), 'page0');
        break;
      case 'education':
        this.page0EducationService.create(this.page0(document._id), 'page0');
        break;
      case 'marketing':
        this.page0MarketingService.create(this.page0(document._id), 'page0');
        break;
      default:
        console.log(`Sorry, we are out of ${typeSite}.`);
        break;
    }
    return document;
  }

  @Mutation(() => Site, { name: 'updateSite' })
  update(
    @Args() id: GetSite,
    @Args('input') input: UpdateSite,
    @Args('typeSite') typeSite: string,
  ) {
    return this.siteService.update(id, input, typeSite);
  }
  @Mutation(() => Site, { name: 'updateSiteImage' })
  updateImage(
    @Args() id: GetSite,
    @Args('input') input: UpdateImageSite,
    @Args('type') type: string,
    @Args('uid') uid: string,
    @Args('typeSite') typeSite: string,
  ) {
    return this.siteService.updateImage(id, input, type, uid, typeSite);
  }
  @Mutation(() => Site, { name: 'updateDataBase' })
  updateDataBase(
    @Args() id: GetSite,
    @Args('input', { type: () => [UpdateDataBase] }) input: UpdateDataBase[],
    @Args('typeSite') typeSite: string,
  ) {
    return this.siteService.updateDataBase(id, input, typeSite);
  }

  @Mutation(() => String, { name: 'deleteSite' })
  delete(@Args() id: GetSite, @Args('typeSite') typeSite: string) {
    return this.siteService.deleteSite(id, typeSite);
  }

  @Mutation(() => [String], { name: 'deleteSites' })
  deleteSites(
    @Args('ids', { type: () => [String] }) ids: string[],
    @Args('typeSite') typeSite: string,
  ) {
    // console.log(this.page0Service.deletePagesById(ids, ));
    return this.siteService.deleteSitesById(ids, typeSite);
  }

  @Query(() => Site, { name: 'findSite' })
  findSite(@Args() id: GetSite, @Args('typeSite') typeSite: string) {
    return this.siteService.findSite(id, typeSite);
  }

  @Query(() => [Site], { name: 'findSites' })
  findSites(@Args('typeSite') typeSite: string) {
    return this.siteService.findSites(typeSite);
  }

  @Query(() => [Site], { name: 'sitesByPagination' })
  findAll(
    @Args('input')
    input: ListInput,
    @Args('typeSite') typeSite: string,
  ) {
    return this.siteService.all(input, typeSite);
  }

  @Query(() => ListSiteResponse, { name: 'listSitesWithCursor' })
  async findAllWithCursor(
    @Args('args') args: ConnectionArgs,
    @Args('typeSite') typeSite: string,
  ): Promise<ListSiteResponse> {
    const { limit, offset } = getPagingParameters(args);
    const { data, count } = await this.siteService.all(
      {
        limit,
        offset,
      },
      typeSite,
    );
    const page = connectionFromArraySlice(data, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });

    return { page, pageData: { count, limit, offset } };
  }

  @ResolveField('page', () => [Page0], { nullable: 'itemsAndList' })
  getPage0(@Parent() { _id, data }: Site) {
    const { type } = data as Data;
    switch (type) {
      case 'ecommerce':
        return this.page0EcommerceService.findPages0ByParentId(_id.toString());
      case 'food':
        return this.page0FoodService.findPages0ByParentId(_id.toString());
      case 'marketing':
        return this.page0MarketingService.findPages0ByParentId(_id.toString());
      case ' education':
        return this.page0EducationService.findPages0ByParentId(_id.toString());
      default:
        console.log(`Sorry, we are out of ${type}.`);
        break;
    }
  }

  private page0(id: string) {
    return {
      title: 'home',
      description: 'home description',
      type: 'page-blank',
      parentId: id,
      siteId: id,
    };
  }
}
