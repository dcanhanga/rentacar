import { type ISpecificationRepository } from '@cars/repositories/implementations/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private readonly specificationsRepository: ISpecificationRepository) {}
  execute({ description, name }: IRequest): undefined | string {
    const specificationAlReadyExits = this.specificationsRepository.findByName(name);

    if (specificationAlReadyExits) {
      return name;
    }
    this.specificationsRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };
