import { Router } from 'express';

import { createCategoryController } from '@cars/useCases/createCategory';
import { lisCategoriesController } from '@cars/useCases/ListCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', lisCategoriesController.handle);

export { categoriesRoutes };
