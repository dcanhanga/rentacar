import { Router } from 'express';

import { createCategoriesController } from '../controllers/createCategories.controller';
import { listCategoriesController } from '../controllers/listCategories.Controller';

const categoriesRoutes = Router();

categoriesRoutes.post('/', createCategoriesController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
export { categoriesRoutes };
