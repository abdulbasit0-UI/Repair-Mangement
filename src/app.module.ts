import { Module } from '@nestjs/common';
import { CustomersService } from './customers/customers.service';
import { CustomersModule } from './customers/customers.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import typeormOptions from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormOptions),
    CustomersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    CustomersModule,
    CategoriesModule,
  ],
})
export class AppModule {}
