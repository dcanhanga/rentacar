import { inject, injectable } from 'tsyringe';

import { type ISpecification } from '../entities/Specification';
import { ISpecificationRepository } from '../repositories/interfaces/ISpecificationsRepository';

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
