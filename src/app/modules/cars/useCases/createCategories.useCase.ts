import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../repositories/interfaces/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private readonly categoriesRepository: ICategoriesRepository
  ) {}

  execute = async ({ description, name }: IRequest): Promise<string | undefined> => {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      const { name } = categoryAlreadyExists;
      return name;
    }
    await this.categoriesRepository.create({ name, description });
  };
}
export { CreateCategoriesUseCase };
