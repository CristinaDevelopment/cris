import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PagesFoodService } from '../pages.food.service';
import { CreatePage, UpdatePage } from '../../dto/page.input';
import { ListPage, Page, Page0, Page1 } from '../../entities/page.model';
import { GetPage } from '../../dto/page.args';
import ConnectionArgs, {
  getPagingParameters,
} from 'src/common/pagination/relay/connection.args';
import { connectionFromArraySlice } from 'graphql-relay';

@Resolver(() => Page0)
export class Pages0FoodResolver {
  constructor(private readonly pagesService: PagesFoodService) {}

  @Mutation(() => Page0, { name: 'createPage0Food' })
  createPage(@Args('input') input: CreatePage) {
    return this.pagesService.create(input, 'page0');
  }
  @Mutation(() => Page0, { name: 'updatePage0Food' })
  updatePage(
    @Args() id: GetPage,
    @Args('input') input: UpdatePage,
    // @Args('type') type: string,
  ) {
    return this.pagesService.update(id, input, 'page0');
  }

  @Mutation(() => String, { name: 'deletePage0Food' })
  deletePage(@Args() id: GetPage) {
    return this.pagesService.deletePage(id, 'page0');
  }

  @Mutation(() => [String], { name: 'deletePages0FoodById' })
  deletePagesById(
    @Args('ids', { type: () => [String] }) ids: string[],
    // @Args('type') type: string,
  ) {
    return this.pagesService.deletePagesById(ids, 'page0');
  }

  @Query(() => Page0, { name: 'findPage0Food' })
  findPage(@Args() id: GetPage) {
    return this.pagesService.findPage(id, 'page0');
  }

  @Query(() => [Page0], { name: 'findPages0Food' })
  findPages() {
    return this.pagesService.findPages('page0');
  }

  @Query(() => [Page0], { name: 'findPages0FoodByParentId' })
  findPagesByParentId(
    @Args('parentId') parentId: string,
    // @Args('type') type: string,
  ) {
    return this.pagesService.findPagesByParentId(parentId, 'page0');
  }

  @Query(() => ListPage, { name: 'listPages0FoodWithCursor' })
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
      'page0',
    );
    const page = connectionFromArraySlice(data, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });

    return { page, pageData: { count, limit, offset } };
  }

  @ResolveField('page', () => [Page1], { nullable: 'itemsAndList' })
  getPage1(@Parent() { _id }: Page0) {
    return this.pagesService.findPages1ByParentId(_id.toString());
  }
}
