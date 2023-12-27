import { type Category } from '@cars/model/Category';
export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
export interface ICategoryRepository {
  create: ({ description, name }: ICreateCategoryDTO) => void;
  findByName: (name: string) => Category | undefined;
  list: () => Category[];
}
