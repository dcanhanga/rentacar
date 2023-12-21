import { Category } from '../model/Category';
import { ICreateCategoryDTO } from './ICategories';

class CategoriesRepository implements CategoriesRepository {
  private readonly categories: Category[];
  constructor() {
    this.categories = [];
  }

  create = ({ name, description }: ICreateCategoryDTO): void => {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
  };

  list = (): Category[] => {
    return this.categories;
  };

  findByName = (name: string): Category | undefined => {
    const category = this.categories.find(category => category.name === name);
    return category;
  };
}

export const categoriesRepository = new CategoriesRepository();
export { CategoriesRepository };
