import { inject, injectable } from 'tsyringe';

import { type ISpecification } from '@cars/entities';
import { ISpecificationRepository } from '@cars/repositories/interfaces/ISpecificationsRepository';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private readonly specificationsRepository: ISpecificationRepository
  ) {}

  execute = async (): Promise<ISpecification[]> => {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  };
}

export { ListSpecificationsUseCase };
