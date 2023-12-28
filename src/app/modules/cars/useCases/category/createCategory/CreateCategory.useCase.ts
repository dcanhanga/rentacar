import { type ICategoryRepository } from '@cars/repositories/implementations/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoryRepository) {}
  execute = ({ description, name }: IRequest): void => {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }
    this.categoriesRepository.create({ name, description });
  };
}
export { CreateCategoryUseCase };
