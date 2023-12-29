import { ImportCategoryController } from './ImportCategory.controller';
import { ImportCategoryUseCase } from './ImportCategory.useCase';
import { CategoriesRepository } from '@cars/repositories/Categories.repository';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
