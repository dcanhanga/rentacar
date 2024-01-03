import { type Response, type Request } from 'express';
import { container } from 'tsyringe';
import { z } from 'zod';

import { CreateCategoriesUseCase } from '@modules/cars/useCases/createCategories.useCase';

class CreateCategoriesController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const categoriesBodySchema = z.object({
      name: z.string(),
      description: z.string()
    });
    const createCategoriesUseCase = container.resolve(CreateCategoriesUseCase);
    const { name, description } = categoriesBodySchema.parse(request.body);

    const categoryAlreadyExists = await createCategoriesUseCase.execute({ description, name });

    if (!categoryAlreadyExists) {
      return response.status(201).json({ message: `Categoria ${name}  cadastradas com sucesso.` });
    }
    return response.status(409).json({
      message: `A categoria ${name} não foi cadastrada porque já existe no sistema.`
    });
  };
}

export const createCategoriesController = new CreateCategoriesController();
