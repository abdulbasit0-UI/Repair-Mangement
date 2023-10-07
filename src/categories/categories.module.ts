import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './categories.entity';
import { CategoriesService } from './categories.service';
import { CategoryResolver } from './categories.resolver';
@Module({
  imports: [TypeOrmModule.forFeature([Categories])],
  providers: [CategoriesService, CategoryResolver],
  exports: [CategoriesService],
})
export class CategoriesModule {}
