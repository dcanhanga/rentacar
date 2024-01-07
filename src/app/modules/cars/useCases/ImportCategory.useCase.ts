import { parse } from 'csv-parse';
import fs from 'fs';
import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '../repositories/interfaces/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository') private readonly categoriesRepository: ICategoriesRepository
  ) {}

  private readonly loadCategories = async (
    file: Express.Multer.File
  ): Promise<IImportCategory[]> => {
    return await new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = parse();

      stream.pipe(parseFile);
      parseFile
        .on('data', (line: any) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          void fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  };

  execute = async (file: Express.Multer.File): Promise<IImportCategory[]> => {
    const categories = await this.loadCategories(file);
    const categoriesAlreadyExists: IImportCategory[] = [];

    for (const category of categories) {
      const { name, description } = category;

      const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

      if (!categoryAlreadyExists) {
        await this.categoriesRepository.create({ name, description });
      } else {
        categoriesAlreadyExists.push(category);
      }
    }

    return categoriesAlreadyExists;
  };
}

export { ImportCategoryUseCase };
