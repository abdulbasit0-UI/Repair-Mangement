import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class CustomerType {
  @Field((type) => ID)
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;
}
