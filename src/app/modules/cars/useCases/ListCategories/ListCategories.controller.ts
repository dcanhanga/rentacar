import { type Request, type Response } from 'express';

import { type ListCategoriesUseCase } from './ListCategories.useCase';

class ListCategoriesController {
  constructor(private readonly listCategoriesUseCase: ListCategoriesUseCase) {}
  handle = (request: Request, response: Response): Response => {
    const categories = this.listCategoriesUseCase.execute();
    return response.status(200).json(categories).send();
  };
}

export { ListCategoriesController };
