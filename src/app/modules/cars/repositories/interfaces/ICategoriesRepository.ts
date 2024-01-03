import { type ICategory } from '@modules/cars/entities/Category';

export interface ICreateCategoriesDTO {
  name: string;
  description: string;
}
export interface ICategoriesRepository {
  create: ({ description, name }: ICreateCategoriesDTO) => Promise<void>;
  findByName: (name: string) => Promise<ICategory | null>;
  list: () => Promise<ICategory[]>;
}
