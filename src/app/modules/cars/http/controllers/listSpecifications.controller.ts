import { type Request, type Response } from 'express';
import { container } from 'tsyringe';

import { ListSpecificationsUseCase } from '@cars/useCases/listSpecifications.useCase';

class ListSpecificationsController {
  handle = async (_: Request, response: Response): Promise<Response> => {
    const listSpecificationUseCase = container.resolve(ListSpecificationsUseCase);
    const specifications = await listSpecificationUseCase.execute();
    return response.status(200).json(specifications);
  };
}

export const listSpecificationsController = new ListSpecificationsController();
