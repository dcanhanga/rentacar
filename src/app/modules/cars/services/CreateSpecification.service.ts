import { ISpecificationRepository } from '../repositories/ISpecifications';
interface IRequest {
  name: string;
  description: string;
}
class CreateSpecification {
  constructor(private specificationRepository: ISpecificationRepository) {}
  execute = ({ description, name }: IRequest): void => {
    const specificationAlreadyExits =
      this.specificationRepository.findByName(name);
    if (specificationAlreadyExits) {
      throw new Error('specification Already Exits');
    }
    this.specificationRepository.create({ description, name });
  };
}

export { CreateSpecification };
