import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Page {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
