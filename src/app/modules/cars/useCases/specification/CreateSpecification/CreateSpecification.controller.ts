import { type Request, type Response } from 'express';

import { type CreateSpecificationUseCase } from './CreateSpecification.useCase';

class CreateSpecificationController {
  constructor(private readonly createSpecificationController: CreateSpecificationUseCase) {}
  handle = (request: Request, response: Response): Response => {
    const { name, description } = request.body;
    this.createSpecificationController.execute({ description, name });
    return response.status(201).send();
  };
}

export { CreateSpecificationController };
