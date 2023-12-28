import { CreateCategoryController } from './CreateCategory.controller';
import { CreateCategoryUseCase } from './CreateCategory.useCase';
import { CategoriesRepository } from '@cars/repositories/Categories.repository';

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
