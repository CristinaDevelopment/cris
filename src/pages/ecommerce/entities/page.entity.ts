import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PageEcommerce {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
