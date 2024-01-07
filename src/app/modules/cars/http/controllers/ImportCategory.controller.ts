import { type Request, type Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from '@cars/useCases/ImportCategory.useCase';
import { AppError } from '@utils/errors/appError';

class ImportCategoryController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { file } = request;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);
    if (!file) {
      throw new AppError('Não podes enviar arquivo vazio', 400);
    }
    if (!file.originalname.endsWith('.csv')) {
      throw new AppError('O arquivo deve ser do tipo CSV', 400);
    }

    const importResult = await importCategoryUseCase.execute(file);
    return response.status(200).json({
      message: 'Categorias cadastradas com sucesso.',
      importResult
    });
  };
}

export const importCategoryController = new ImportCategoryController();
