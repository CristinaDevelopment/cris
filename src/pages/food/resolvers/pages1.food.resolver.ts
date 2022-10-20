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
import { ListPage, Page, Page1, Page2 } from '../../entities/page.model';
import { GetPage } from '../../dto/page.args';
import ConnectionArgs, {
  getPagingParameters,
} from 'src/common/pagination/relay/connection.args';
import { connectionFromArraySlice } from 'graphql-relay';

@Resolver(() => Page1)
export class Pages1FoodResolver {
  constructor(private readonly pagesService: PagesFoodService) {}
  @Mutation(() => Page1, { name: 'createPage1Food' })
  createPage(@Args('input') input: CreatePage) {
    return this.pagesService.create(input, 'page1');
  }
  @Mutation(() => Page1, { name: 'updatePage1Food' })
  updatePage(
    @Args() id: GetPage,
    @Args('input') input: UpdatePage,
    // @Args('type') type: string,
  ) {
    return this.pagesService.update(id, input, 'page1');
  }

  @Mutation(() => String, { name: 'deletePage1Food' })
  deletePage(@Args() id: GetPage) {
    return this.pagesService.deletePage(id, 'page1');
  }

  @Mutation(() => [String], { name: 'deletePages1FoodById' })
  deletePagesById(
    @Args('ids', { type: () => [String] }) ids: string[],
    // @Args('type') type: string,
  ) {
    return this.pagesService.deletePagesById(ids, 'page1');
  }

  @Query(() => Page1, { name: 'findPage1Food' })
  findPage(@Args() id: GetPage) {
    return this.pagesService.findPage(id, 'page1');
  }

  @Query(() => [Page1], { name: 'findPages1Food' })
  findPages() {
    return this.pagesService.findPages('page1');
  }

  @Query(() => [Page1], { name: 'findPages1FoodByParentId' })
  findPagesByParentId(
    @Args('parentId') parentId: string,
    // @Args('type') type: string,
  ) {
    return this.pagesService.findPagesByParentId(parentId, 'page1');
  }

  @Query(() => ListPage, { name: 'listPages1FoodWithCursor' })
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
