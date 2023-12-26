import { Router } from 'express';
import { CategoriesRepository } from 'cars/repositories/Categories.repository';
const categoriesRepository = new CategoriesRepository();

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  categoriesRepository.create({ name, description });
  response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();
  response.status(200).json(categories).send();
});

export { categoriesRoutes };