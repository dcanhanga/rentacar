import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '@cars/useCases/category/createCategory';
import { lisCategoriesController } from '@cars/useCases/category/ListCategories';
import { importCategoryController } from '@cars/useCases/importCategory';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp'
});

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', lisCategoriesController.handle);
categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  void importCategoryController.handle(request, response);
});

export { categoriesRoutes };
