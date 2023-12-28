import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '@cars/useCases/category/createCategory';
import { lisCategoriesController } from '@cars/useCases/category/ListCategories';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp'
});

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', lisCategoriesController.handle);
categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  const { file } = request;
  // eslint-disable-next-line no-console
  console.log(file);
  return response.send();
});

export { categoriesRoutes };
