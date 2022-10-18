import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PagesEcommerceService } from './pages.ecommerce.service';
import { CreatePageInput } from './dto/create-page.input';
import { UpdatePageInput } from './dto/update-page.input';
import { Page } from '../meal/entities/page.entity';

@Resolver(() => Page)
export class PagesEcommerceResolver {
  constructor(private readonly pagesService: PagesEcommerceService) {}

  @Mutation(() => Page)
  createPage(@Args('createPageInput') createPageInput: CreatePageInput) {
    return this.pagesService.create(createPageInput);
  }

  @Query(() => [Page], { name: 'pages' })
  findAll() {
    return this.pagesService.findAll();
  }

  @Query(() => Page, { name: 'page' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pagesService.findOne(id);
  }

  @Mutation(() => Page)
  updatePage(@Args('updatePageInput') updatePageInput: UpdatePageInput) {
    return this.pagesService.update(updatePageInput.id, updatePageInput);
  }

  @Mutation(() => Page)
  removePage(@Args('id', { type: () => Int }) id: number) {
    return this.pagesService.remove(id);
  }
}
