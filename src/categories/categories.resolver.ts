import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryType } from './categories.type';
import { CategoryDto } from './categories.dto';
import { CategoriesService } from './categories.service';

@Resolver((of) => CategoryType)
export class CategoryResolver {
  constructor(private catService: CategoriesService) {}

  @Mutation((returns) => CategoryType)
  createCategory(@Args('createCatDto') createCatDto: CategoryDto) {
    return this.catService.createCategory(createCatDto);
  }

  @Query((returns) => [CategoryType])
  getAllCats() {
    return this.catService.getAllCategories();
  }

  @Mutation((returns) => CategoryType)
  updateCat(
    @Args('id') id: number,
    @Args('updateCat') updateCatDto: CategoryDto,
  ) {
    return this.catService.updateCategory(id, updateCatDto);
  }

  @Mutation((returns) => String)
  deleteCat(@Args('id') id: number) {
    const deleteCat = this.catService.deleteCat(id);
    return 'Category deleted successfully';
  }
}
