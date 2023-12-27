import { ListCategoriesController } from './ListCategories.controller';
import { ListCategoriesUseCase } from './ListCategories.useCase';
import { CategoriesRepository } from '@cars/repositories/Categories.repository';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const lisCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { lisCategoriesController };
