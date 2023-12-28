import {
  type ICreateSpecificationDTO,
  type ISpecificationRepository
} from './implementations/ISpecificationsRepository';
import { Specification } from '@cars/model/Specification';

class SpecificationsRepository implements ISpecificationRepository {
  private readonly specifications: Specification[];
  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance = (): SpecificationsRepository => {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }
    return SpecificationsRepository.INSTANCE;
  };

  create = ({ description, name }: ICreateSpecificationDTO): void => {
    const specification = new Specification();
    Object.assign(specification, { name, description, created_at: new Date() });
    this.specifications.push(specification);
  };

  findByName = (name: string): Specification | undefined =>
    this.specifications.find(specification => specification.name === name);

  list = (): Specification[] => this.specifications;
}

export { SpecificationsRepository };
