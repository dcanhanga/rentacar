import { type ICreateSpecificationDTO } from '@cars/dtos';
import { type ISpecification } from '@cars/entities';

export interface ISpecificationRepository {
  create: ({ description, name }: ICreateSpecificationDTO) => Promise<void>;
  findByName: (name: string) => Promise<ISpecification | null>;
  list: () => Promise<ISpecification[]>;
}
