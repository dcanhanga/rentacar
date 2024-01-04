import { type Request, type Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from '../../useCases/ImportCategory.useCase';

class ImportCategoryController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    if (!file) {
      return response.status(400).json({ message: 'Não podes enviar arquivo vazio' }).send();
    }
    if (!file.originalname.endsWith('.csv')) {
      return response.status(400).json({ message: 'O arquivo deve ser do tipo CSV' });
    }
    const categoriesAlreadyExists = await importCategoryUseCase.execute(file);
    if (categoriesAlreadyExists.length > 0) {
      const categoryNames = categoriesAlreadyExists.map(category => category.name).join(', ');
      const message =
        categoriesAlreadyExists.length === 1
          ? `A categoria ${categoryNames} não foi cadastrada porque já existe no sistema.`
          : `As seguintes categorias não foram cadastradas porque já existem no sistema: ${categoryNames}.`;

      return response.status(409).json({ message });
    }
    return response.status(200).json({ message: 'Categorias cadastradas com sucesso.' });
  };
}

export const importCategoryController = new ImportCategoryController();
