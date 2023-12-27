import { type Response, type Request } from 'express';

import { type CreateCategoryUseCase } from './CreateCategory.useCase';

class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}
  handle = (request: Request, response: Response): Response => {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ description, name });
    return response.status(201).send();
  };
}

export { CreateCategoryController };
