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
import { ListPage, Page, Page2, Page1 } from '../../entities/page.model';
import { GetPage } from '../../dto/page.args';
import ConnectionArgs, {
  getPagingParameters,
} from 'src/common/pagination/relay/connection.args';
import { connectionFromArraySlice } from 'graphql-relay';

@Resolver(() => Page2)
export class Pages2FoodResolver {
  constructor(private readonly pagesService: PagesFoodService) {}

  @Mutation(() => Page2, { name: 'createPage2Food' })
  createPage(@Args('input') input: CreatePage) {
    return this.pagesService.create(input, 'page2');
  }
  @Mutation(() => Page2, { name: 'updatePage2Food' })
  updatePage(
    @Args() id: GetPage,
    @Args('input') input: UpdatePage,
    // @Args('type') type: string,
  ) {
    return this.pagesService.update(id, input, 'page2');
  }

  @Mutation(() => String, { name: 'deletePage2Food' })
  deletePage(@Args() id: GetPage) {
    return this.pagesService.deletePage(id, 'page2');
  }

  @Mutation(() => [String], { name: 'deletePages2FoodById' })
  deletePagesById(
    @Args('ids', { type: () => [String] }) ids: string[],
    // @Args('type') type: string,
  ) {
    return this.pagesService.deletePagesById(ids, 'page2');
  }

  @Query(() => Page2, { name: 'findPage2Food' })
  findPage(@Args() id: GetPage) {
    return this.pagesService.findPage(id, 'page2');
  }

  @Query(() => [Page2], { name: 'findPages2Food' })
  findPages() {
    return this.pagesService.findPages('page2');
  }

  @Query(() => [Page2], { name: 'findPages2FoodByParentId' })
  findPagesByParentId(
    @Args('parentId') parentId: string,
    // @Args('type') type: string,
  ) {
    return this.pagesService.findPagesByParentId(parentId, 'page2');
  }

  @Query(() => ListPage, { name: 'listPages2FoodWithCursor' })
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
