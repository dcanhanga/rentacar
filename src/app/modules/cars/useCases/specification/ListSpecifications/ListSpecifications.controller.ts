import { type Response, type Request } from 'express';

import { type ListSpecificationsUseCase } from './ListSpecifications.useCase';

class ListSpecificationsController {
  constructor(private readonly specificationsRepository: ListSpecificationsUseCase) {}

  handle = (request: Request, response: Response): Response => {
    const speciations = this.specificationsRepository.execute();
    return response.status(200).json(speciations);
  };
}

export { ListSpecificationsController };
