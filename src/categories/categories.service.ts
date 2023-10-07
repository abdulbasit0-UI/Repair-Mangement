import { Injectable } from '@nestjs/common';
import { DataSource, Repository, DeleteResult } from 'typeorm';
import { Categories } from './categories.entity';
import { CategoryDto } from './categories.dto';

@Injectable()
export class CategoriesService extends Repository<Categories> {
  constructor(private dataSource: DataSource) {
    super(Categories, dataSource.createEntityManager());
  }

  async createCategory(catDto: CategoryDto): Promise<Categories> {
    const { catName } = catDto;
    const cat = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Categories)
      .values({
        catName,
      })
      .returning('*')
      .execute();

    return cat.raw[0];
  }

  async getAllCategories(): Promise<Categories[]> {
    return await this.dataSource
      .getRepository(Categories)
      .createQueryBuilder('categories')
      .getMany();
  }

  async updateCategory(
    id: number,
    categoryDto: CategoryDto,
  ): Promise<Categories> {
    const updateCat = await this.dataSource
      .createQueryBuilder()
      .update(Categories)
      .set({
        catName: categoryDto.catName,
      })
      .where('id = :id', { id })
      .returning('*')
      .updateEntity(true)
      .execute();

    return updateCat.raw[0];
  }

  async deleteCat(id: number): Promise<DeleteResult> {
    return await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(Categories)
      .where('id = :id', { id })
      .execute();
  }
}
