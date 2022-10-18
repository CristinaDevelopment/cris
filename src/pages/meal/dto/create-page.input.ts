import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
