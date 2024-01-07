import { type Response, type Request } from 'express';
import { container } from 'tsyringe';

import { CreateCategoriesUseCase } from '@cars/useCases/createCategories.useCase';
import { categoriesBodySchema } from '@utils/validations/zod';

class CreateCategoriesController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const createCategoriesUseCase = container.resolve(CreateCategoriesUseCase);

    const { name, description } = categoriesBodySchema.parse(request.body);

    await createCategoriesUseCase.execute({ description, name });

    return response.status(201).json({ message: `Categoria ${name}  cadastradas com sucesso.` });
  };
}
export const createCategoriesController = new CreateCategoriesController();
