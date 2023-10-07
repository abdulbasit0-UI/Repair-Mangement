import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoryType {
  @Field()
  catName: string;
}
