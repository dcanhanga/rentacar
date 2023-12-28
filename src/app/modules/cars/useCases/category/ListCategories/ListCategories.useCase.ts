import { type Category } from '@cars/model/Category';
import { type ICategoryRepository } from '@cars/repositories/implementations/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private readonly categoriesRepository: ICategoryRepository) {}

  execute = (): Category[] => this.categoriesRepository.list();
}

export { ListCategoriesUseCase };
