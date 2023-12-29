import { type Request, type Response } from 'express';

import { type CreateSpecificationUseCase } from './CreateSpecification.useCase';

class CreateSpecificationController {
  constructor(private readonly createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle = (request: Request, response: Response): Response => {
    const { name, description } = request.body;
    const categorySpecificationExists = this.createSpecificationUseCase.execute({
      description,
      name
    });

    if (!categorySpecificationExists) {
      return response
        .status(200)
        .json({ message: `Especificação ${name}  cadastradas com sucesso.` });
    }
    return response.status(409).json({
      message: `A Especificação ${name} não foi cadastrada porque já existe no sistema.`
    });
  };
}

export { CreateSpecificationController };
