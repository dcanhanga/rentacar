import { Router } from 'express';

import { SpecificationsRepository } from '../repositories/Specifications.repository';
import { CreateSpecification } from '../services/CreateSpecification.service';
const specificationRepository = new SpecificationsRepository();
const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecification(
    specificationRepository,
  );
  createSpecificationService.execute({ name, description });
  return response.status(201).send();
});

specificationsRoutes.get('/', (request, response) => {
  const all = specificationRepository.list();
  return response.json(all).send();
});

export { specificationsRoutes };
