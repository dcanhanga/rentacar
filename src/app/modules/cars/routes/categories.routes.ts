import { Request, Response, Router } from 'express';

import { categoriesRepository } from '../repositories/Categories.repository';
import { CreateCategoryService } from '../services/CreateCategory.service';

const categoriesRoutes = Router();
const { list } = categoriesRepository;
categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ description, name });
  response.status(201).send();
});
categoriesRoutes.get('/', (request, response) => {
  const all = list();
  return response.json(all);
});

export { categoriesRoutes };
