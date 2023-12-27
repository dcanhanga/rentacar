import { type ICategoryRepository, type ICreateCategoryDTO } from './ICategoriesRepository';
import { Category } from '@cars/model/Category';

class CategoriesRepository implements ICategoryRepository {
  private readonly categories: Category[];
  constructor() {
    this.categories = [];
  }

  create = ({ name, description }: ICreateCategoryDTO): void => {
    const category = new Category();

    Object.assign(category, { name, description, created_at: new Date() });
    this.categories.push(category);
  };

  list = (): Category[] => this.categories;

  findByName = (name: string): Category | undefined =>
    this.categories.find(category => category.name === name);
}
export { CategoriesRepository };
