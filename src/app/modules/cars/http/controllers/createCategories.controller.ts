import { type Response, type Request } from 'express';
import { container } from 'tsyringe';
import { z } from 'zod';

import { CreateCategoriesUseCase } from '@cars/useCases/createCategories.useCase';

class CreateCategoriesController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const createCategoriesUseCase = container.resolve(CreateCategoriesUseCase);
    const categoriesBodySchema = z.object({
      name: z.string(),
      description: z.string()
    });

    const { name, description } = categoriesBodySchema.parse(request.body);

    await createCategoriesUseCase.execute({ description, name });

    return response.status(201).json({ message: `Categoria ${name}  cadastradas com sucesso.` });
  };
}
export const createCategoriesController = new CreateCategoriesController();
