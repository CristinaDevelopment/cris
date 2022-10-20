import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PagesMarketingService } from '../pages.marketing.service';
import { CreatePage, UpdatePage } from '../../dto/page.input';
import { ListPage, Page, Page2, Page1 } from '../../entities/page.model';
import { GetPage } from '../../dto/page.args';
import ConnectionArgs, {
  getPagingParameters,
} from 'src/common/pagination/relay/connection.args';
import { connectionFromArraySlice } from 'graphql-relay';

@Resolver(() => Page2)
export class Pages2MarketingResolver {
  constructor(private readonly pagesService: PagesMarketingService) {}

  @Mutation(() => Page2, { name: 'createPage2Marketing' })
  createPage(@Args('input') input: CreatePage) {
    return this.pagesService.create(input, 'page2');
  }
  @Mutation(() => Page2, { name: 'updatePage2Marketing' })
  updatePage(
    @Args() id: GetPage,
    @Args('input') input: UpdatePage,
    // @Args('type') type: string,
  ) {
    return this.pagesService.update(id, input, 'page2');
  }

  @Mutation(() => String, { name: 'deletePage2Marketing' })
  deletePage(@Args() id: GetPage) {
    return this.pagesService.deletePage(id, 'page2');
  }

  @Mutation(() => [String], { name: 'deletePages2MarketingById' })
  deletePagesById(
    @Args('ids', { type: () => [String] }) ids: string[],
    // @Args('type') type: string,
  ) {
    return this.pagesService.deletePagesById(ids, 'page2');
  }

  @Query(() => Page2, { name: 'findPage2Marketing' })
  findPage(@Args() id: GetPage) {
    return this.pagesService.findPage(id, 'page2');
  }

  @Query(() => [Page2], { name: 'findPages2Marketing' })
  findPages() {
    return this.pagesService.findPages('page2');
  }

  @Query(() => [Page2], { name: 'findPages2MarketingByParentId' })
  findPagesByParentId(
    @Args('parentId') parentId: string,
    // @Args('type') type: string,
  ) {
    return this.pagesService.findPagesByParentId(parentId, 'page2');
  }

  @Query(() => ListPage, { name: 'listPages2MarketingWithCursor' })
  async findAllWithCursor(
    @Args('args') args: ConnectionArgs,
    @Args('parentId') parentId: string,
    // @Args('type') type: string,
  ): Promise<ListPage> {
    const { limit, offset } = getPagingParameters(args);
    const { data, count } = await this.pagesService.all(
      {
        limit,
        offset,
      },
      parentId,
      'page2',
    );
    const page = connectionFromArraySlice(data, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });

    return { page, pageData: { count, limit, offset } };
  }

  // @ResolveField('page', () => [Page1], { nullable: 'itemsAndList' })
  // getPage1(@Parent() { _id }: Page2) {
  //   return this.pagesService.findPages1ByParentId(_id.toString());
  // }
}
