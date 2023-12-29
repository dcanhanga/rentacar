import { type Response, type Request } from 'express';

import { type CreateCategoryUseCase } from './CreateCategory.useCase';

class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}
  handle = (request: Request, response: Response): Response => {
    const { name, description } = request.body;
    const categoryAlreadyExists = this.createCategoryUseCase.execute({ description, name });
    if (!categoryAlreadyExists) {
      return response.status(200).json({ message: `Categoria ${name}  cadastradas com sucesso.` });
    }
    return response.status(409).json({
      message: `A categoria ${name} não foi cadastrada porque já existe no sistema.`
    });
  };
}

export { CreateCategoryController };
