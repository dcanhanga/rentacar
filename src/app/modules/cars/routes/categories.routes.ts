import { Router } from 'express';

import { createCategoryController } from '@cars/useCases/category/createCategory';
import { lisCategoriesController } from '@cars/useCases/category/ListCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', lisCategoriesController.handle);

export { categoriesRoutes };
