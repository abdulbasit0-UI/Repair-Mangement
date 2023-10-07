import { Field, Float, ID, InputType, Int } from '@nestjs/graphql';

import {
  IsEmail,
  IsMobilePhone,
  IsPhoneNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CustomerDto {
  @MinLength(4)
  @Field()
  firstName: string;

  @MinLength(4)
  @Field()
  lastName: string;

  @IsEmail()
  @Field()
  email: string;

  @Field()
  @IsMobilePhone('en-ZA')
  @MinLength(9)
  @MaxLength(10)
  phoneNumber: string;
}
