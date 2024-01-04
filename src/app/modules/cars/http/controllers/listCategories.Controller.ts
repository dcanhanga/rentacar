import { type Request, type Response } from 'express';
import { container } from 'tsyringe';

import { LisCategoriesUseCase } from '../../useCases/listCategories.useCase';

class ListCategoriesController {
  handle = async (_: Request, response: Response): Promise<Response> => {
    const listCategoriesUseCase = container.resolve(LisCategoriesUseCase);
    const categories = await listCategoriesUseCase.execute();
    return response.status(200).json(categories);
  };
}

export const listCategoriesController = new ListCategoriesController();
