import { inject, injectable } from 'tsyringe';

import { ISpecificationRepository } from '../repositories/interfaces/ISpecificationsRepository';

import { AppError } from '@/app/utils/errors/appError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private readonly specificationsRepository: ISpecificationRepository
  ) {}

  execute = async ({ description, name }: IRequest): Promise<undefined> => {
    const specificationAlreadyExits = await this.specificationsRepository.findByName(name);
    if (!specificationAlreadyExits) {
      await this.specificationsRepository.create({ name, description });
      return;
    }

    const massage = `A especificação ${name} não foi cadastrada porque já existe no sistema`;
    throw new AppError(massage, 409);
  };
}

export { CreateSpecificationsUseCase };
