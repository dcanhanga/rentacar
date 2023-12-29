import { type ICategoryRepository } from '@cars/repositories/implementations/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoryRepository) {}
  execute = ({ description, name }: IRequest): undefined | string => {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      const { name } = categoryAlreadyExists;
      return name;
    }
    this.categoriesRepository.create({ name, description });
  };
}
export { CreateCategoryUseCase };
