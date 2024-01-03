import { type Response, type Request } from 'express';
import { container } from 'tsyringe';
import { z } from 'zod';

import { CreateSpecificationsUseCase } from '../../useCases/createSpecifications.useCase';

class CreateSpecificationsController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const specificationBodySchema = z.object({
      name: z.string(),
      description: z.string()
    });
    const createSpecificationsUseCase = container.resolve(CreateSpecificationsUseCase);
    const { name, description } = specificationBodySchema.parse(request.body);
    const specificationAlreadyExits = await createSpecificationsUseCase.execute({
      description,
      name
    });
    if (!specificationAlreadyExits) {
      return response.status(201).json({ massage: `Especificação ${name} cadastrada com sucesso` });
    }
    return response
      .status(409)
      .json({ message: `A especificação ${name} não foi cadastrada porque já existe no sistema` });
  };
}
export const createSpecificationsController = new CreateSpecificationsController();
