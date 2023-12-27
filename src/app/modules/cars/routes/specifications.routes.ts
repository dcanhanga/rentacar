import { Router } from 'express';

import { SpecificationsRepository } from '@cars/repositories/Specifications.repository';
import { CreateSpecificationService } from '@cars/services/CreateSpecificationService';

const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(specificationsRepository);
const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  createSpecificationService.execute({ name, description });
  response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
  const all = specificationsRepository.list();
  response.status(200).json(all).send();
});

export { specificationsRoutes };
