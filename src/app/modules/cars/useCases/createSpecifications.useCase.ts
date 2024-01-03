import { inject, injectable } from 'tsyringe';

import { ISpecificationRepository } from '../repositories/interfaces/ISpecificationsRepository';

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

  execute = async ({ description, name }: IRequest): Promise<string | undefined> => {
    const specificationAlreadyExits = await this.specificationsRepository.findByName(name);
    if (specificationAlreadyExits) {
      const { name } = specificationAlreadyExits;
      return name;
    }
    await this.specificationsRepository.create({ name, description });
  };
}

export { CreateSpecificationsUseCase };
