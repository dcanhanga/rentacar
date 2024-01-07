import { type Response, type Request } from 'express';
import { container } from 'tsyringe';
import { z } from 'zod';

import { CreateSpecificationsUseCase } from '@cars/useCases/createSpecifications.useCase';

class CreateSpecificationsController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const specificationBodySchema = z.object({
      name: z.string(),
      description: z.string()
    });
    const createSpecificationsUseCase = container.resolve(CreateSpecificationsUseCase);
    const { name, description } = specificationBodySchema.parse(request.body);
    await createSpecificationsUseCase.execute({
      description,
      name
    });

    return response.status(201).json({ massage: `Especificação ${name} cadastrada com sucesso` });
  };
}
export const createSpecificationsController = new CreateSpecificationsController();
