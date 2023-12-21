import { ICategoriesRepository } from '../repositories/ICategories';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute = ({ description, name }: IRequest): void => {
    const categoryAlreadyExits = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExits) {
      throw new Error('Category Already exits');
    }
    this.categoriesRepository.create({ name, description });
  };
}
export { CreateCategoryService };
