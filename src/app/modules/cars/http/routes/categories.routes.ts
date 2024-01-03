import { Router } from 'express';

import { createCategoriesController } from '../controllers/createCategories.controller';

const categoriesRoutes = Router();

categoriesRoutes.post('/', createCategoriesController.handle);

export { categoriesRoutes };
