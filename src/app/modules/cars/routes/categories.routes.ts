import { Router } from 'express';

import { CategoriesRepository } from '@cars/repositories/Categories.repository';
import { CreateCategoryService } from '@cars/services/CreateCategoryService';

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  createCategoryService.execute({ description, name });
  response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();
  response.status(200).json(categories).send();
});

export { categoriesRoutes };
