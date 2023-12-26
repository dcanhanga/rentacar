import { Category } from 'cars/model/Category';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
export interface ICategoryRepository {
  findByName(name: string): Category;
  create({ description, name }: ICreateCategoryDTO): void;
  list(): Category[];
}
