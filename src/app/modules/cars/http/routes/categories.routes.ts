import { Router } from 'express';
import multer from 'multer';

import { createCategoriesController } from '../controllers/createCategories.controller';
import { importCategoryController } from '../controllers/ImportCategory.controller';
import { listCategoriesController } from '../controllers/listCategories.Controller';
const upload = multer({
  dest: 'temp'
});
const categoriesRoutes = Router();

categoriesRoutes.post('/', createCategoriesController.handle);
categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
export { categoriesRoutes };
