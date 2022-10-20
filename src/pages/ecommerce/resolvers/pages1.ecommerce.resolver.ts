import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PagesEcommerceService } from '../pages.ecommerce.service';
import { CreatePage, UpdatePage } from '../../dto/page.input';
import { ListPage, Page, Page1, Page2 } from '../../entities/page.model';
import { GetPage } from '../../dto/page.args';
import ConnectionArgs, {
  getPagingParameters,
} from 'src/common/pagination/relay/connection.args';
import { connectionFromArraySlice } from 'graphql-relay';

@Resolver(() => Page1)
export class Pages1EcommerceResolver {
  constructor(private readonly pagesService: PagesEcommerceService) {}
  @Mutation(() => Page1, { name: 'createPage1Ecommerce' })
  createPage(@Args('input') input: CreatePage) {
    return this.pagesService.create(input, 'page1');
  }
  @Mutation(() => Page1, { name: 'updatePage1Ecommerce' })
  updatePage(
    @Args() id: GetPage,
    @Args('input') input: UpdatePage,
    // @Args('type') type: string,
  ) {
    return this.pagesService.update(id, input, 'page1');
  }

  @Mutation(() => String, { name: 'deletePage1Ecommerce' })
  deletePage(@Args() id: GetPage) {
    return this.pagesService.deletePage(id, 'page1');
  }

  @Mutation(() => [String], { name: 'deletePages1EcommerceById' })
  deletePagesById(
    @Args('ids', { type: () => [String] }) ids: string[],
    // @Args('type') type: string,
  ) {
    return this.pagesService.deletePagesById(ids, 'page1');
  }

  @Query(() => Page1, { name: 'findPage1Ecommerce' })
  findPage(@Args() id: GetPage) {
    return this.pagesService.findPage(id, 'page1');
  }

  @Query(() => [Page1], { name: 'findPages1Ecommerce' })
  findPages() {
    return this.pagesService.findPages('page1');
  }

  @Query(() => [Page1], { name: 'findPages1EcommerceByParentId' })
  findPagesByParentId(
    @Args('parentId') parentId: string,
    // @Args('type') type: string,
  ) {
    return this.pagesService.findPagesByParentId(parentId, 'page1');
  }

  @Query(() => ListPage, { name: 'listPages1EcommerceWithCursor' })
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
      'page1',
    );
    const page = connectionFromArraySlice(data, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });

    return { page, pageData: { count, limit, offset } };
  }

  @ResolveField('page', () => [Page2], { nullable: 'itemsAndList' })
  getPage1(@Parent() { _id }: Page1) {
    return this.pagesService.findPages2ByParentId(_id.toString());
  }
}
