import { type Specification } from '../../../model/Specification';
import { type ISpecificationRepository } from '../../../repositories/implementations/ISpecificationsRepository';

class ListSpecificationsUseCase {
  constructor(private readonly specificationSRepository: ISpecificationRepository) {}

  execute = (): Specification[] => this.specificationSRepository.list();
}

export { ListSpecificationsUseCase };
