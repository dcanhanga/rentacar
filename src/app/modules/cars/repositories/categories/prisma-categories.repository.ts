import {
  type ICategoriesRepository,
  type ICreateCategoriesDTO
} from '../interfaces/ICategoriesRepository';
import { type ICategory } from '@modules/cars/entities/Category';
import { prisma } from '@utils/prisma';

class PrismaCategoriesRepository implements ICategoriesRepository {
  create = async ({ description, name }: ICreateCategoriesDTO): Promise<void> => {
    await prisma.category.create({ data: { description, name } });
  };

  async findByName(name: string): Promise<ICategory | null> {
    const category = await prisma.category.findUnique({ where: { name } });
    return category;
  }

  async list(): Promise<ICategory[]> {
    const categories = await prisma.category.findMany();
    return categories;
  }
}

export { PrismaCategoriesRepository };
