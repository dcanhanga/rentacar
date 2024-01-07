import { parse } from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../repositories/interfaces/ICategoriesRepository';
import { AppError } from '@utils/errors/appError';

interface IImportCategory {
  name: string;
  description: string;
}
interface IImportResult {
  created: string[];
  alreadyExists: string[];
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository') private readonly categoriesRepository: ICategoriesRepository
  ) {}

  private readonly loadCategories = async (
    file: Express.Multer.File
  ): Promise<IImportCategory[]> => {
    const filePath = file.path;

    try {
      const stream = fs.createReadStream(filePath);
      const categories: IImportCategory[] = [];
      const parseFile = parse();

      stream.pipe(parseFile);

      await new Promise((resolve, reject) => {
        parseFile
          .on('data', (line: any) => {
            const [name, description] = line;
            categories.push({ name, description });
          })
          .on('end', () => {
            resolve(categories);
          })
          .on('error', reject);
      });

      return categories;
    } finally {
      try {
        await fs.promises.unlink(filePath);
      } catch (unlinkError) {
        // eslint-disable-next-line no-unsafe-finally, @typescript-eslint/restrict-template-expressions
        throw new Error(`Erro ao excluir o arquivo: ${unlinkError}`);
      }
    }
  };

  private readonly findDuplicates = (categories: IImportCategory[]): string[] | undefined => {
    const duplicateNames = new Set<string>();
    const uniqueNames = new Set<string>();

    for (const category of categories) {
      const { name } = category;

      if (uniqueNames.has(name)) {
        duplicateNames.add(name);
      } else {
        uniqueNames.add(name);
      }
    }

    if (duplicateNames.size > 0) {
      return Array.from(duplicateNames).join(', ').split(',');
    }
    return undefined;
  };

  private readonly validateCSVData = (categories: IImportCategory[]): void => {
    if (!categories.length) {
      throw new AppError('O arquivo CSV está vazio.', 400);
    }
  };

  execute = async (file: Express.Multer.File): Promise<IImportResult> => {
    const categories = await this.loadCategories(file);

    this.validateCSVData(categories);

    const importResult: IImportResult = { created: [], alreadyExists: [] };
    const duplicatedCategories = this.findDuplicates(categories) ?? [];

    for (const category of categories) {
      const { name, description } = category;

      const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

      if (!categoryAlreadyExists) {
        await this.categoriesRepository.create({ name, description });
        importResult.created.push(name);
      } else {
        importResult.alreadyExists.push(name);
      }
    }

    const hasConflict = duplicatedCategories.length > 0 || importResult.alreadyExists.length > 0;

    if (hasConflict) {
      const result = {
        errorMessage:
          'Conflito de Categorias Duplicadas. Algumas categorias já existem no sistema ou estão duplicadas no arquivo.',
        conflict: {
          duplicatedCategories,
          alreadyExists: importResult.alreadyExists
        },
        created: importResult.created
      };

      throw new AppError(result, 409);
    } else {
      return importResult;
    }
  };
}

export { ImportCategoryUseCase };
