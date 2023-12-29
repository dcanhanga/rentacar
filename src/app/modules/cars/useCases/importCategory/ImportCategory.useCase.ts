import { parse } from 'csv-parse';
import fs from 'fs';

import { type ICategoryRepository } from '@cars/repositories/implementations/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private readonly categoriesRepository: ICategoryRepository) {}
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

    const promises = categories.map(async category => {
      const { name, description } = category;

      const categoryAlreadyExists = this.categoriesRepository.findByName(name);

      if (!categoryAlreadyExists) {
        this.categoriesRepository.create({ name, description });
      } else {
        categoriesAlreadyExists.push(category);
      }

      return category;
    });

    await Promise.all(promises);

    return categoriesAlreadyExists;
  };
}

export { ImportCategoryUseCase };
