import {
  type ICreateCategoryDTO,
  type ICategoryRepository
} from './implementations/ICategoriesRepository';
import { Category } from '@cars/model/Category';

class CategoriesRepository implements ICategoryRepository {
  private readonly categories: Category[];
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance = (): CategoriesRepository => {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  };

  create = ({ name, description }: ICreateCategoryDTO): void => {
    const category = new Category();
    Object.assign(category, { name, description, created_at: new Date() });
    this.categories.push(category);
  };

  findByName = (name: string): Category | undefined =>
    this.categories.find(category => category.name === name);

  list = (): Category[] => this.categories;
}

export { CategoriesRepository };
