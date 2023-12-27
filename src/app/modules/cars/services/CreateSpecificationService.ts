import { type ISpecificationRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private readonly specificationsRepository: ISpecificationRepository) {}
  execute({ description, name }: IRequest): void {
    const specificationAlReadyExits = this.specificationsRepository.findByName(name);

    if (specificationAlReadyExits) {
      throw new Error('Specification already exits');
    }
    this.specificationsRepository.create({ description, name });
  }
}
export { CreateSpecificationService };
