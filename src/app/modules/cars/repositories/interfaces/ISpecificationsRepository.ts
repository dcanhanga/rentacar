import { type ISpecification } from '@modules/cars/entities/Specification';
export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
export interface ISpecificationRepository {
  create: ({ description, name }: ICreateSpecificationDTO) => Promise<void>;
  findByName: (name: string) => Promise<ISpecification | null>;
  list: () => Promise<ISpecification[]>;
}
