import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../repositories/interfaces/ICategoriesRepository';
import { AppError } from '@utils/errors/appError';

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

  execute = async ({ description, name }: IRequest): Promise<void> => {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      const { name } = categoryAlreadyExists;
      const message = `A categoria ${name} não foi cadastrada porque já existe no sistema.`;
      throw new AppError(message, 409);
    }

    await this.categoriesRepository.create({ name, description });
  };
}
export { CreateCategoriesUseCase };
