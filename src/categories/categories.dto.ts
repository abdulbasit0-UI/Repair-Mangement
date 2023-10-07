import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class CategoryDto {
  @Field()
  @MinLength(5)
  catName: string;
}
