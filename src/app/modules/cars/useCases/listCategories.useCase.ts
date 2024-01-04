import { inject, injectable } from 'tsyringe';

import { type ICategory } from '../entities/Category';
import { ICategoriesRepository } from '../repositories/interfaces/ICategoriesRepository';

@injectable()
class LisCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository') private readonly categoriesRepository: ICategoriesRepository
  ) {}

  execute = async (): Promise<ICategory[]> => {
    const categories = await this.categoriesRepository.list();
    return categories;
  };
}

export { LisCategoriesUseCase };
