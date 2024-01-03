import { type ISpecification } from '../../entities/Specification';
import {
  type ICreateSpecificationDTO,
  type ISpecificationRepository
} from '../interfaces/ISpecificationsRepository';
import { prisma } from '@src/app/utils/prisma';

class PrismaSpecificationsRepository implements ISpecificationRepository {
  create = async ({ description, name }: ICreateSpecificationDTO): Promise<void> => {
    await prisma.specification.create({ data: { description, name } });
  };

  findByName = async (name: string): Promise<ISpecification | null> => {
    const specification = await prisma.specification.findUnique({ where: { name } });
    return specification;
  };

  list = async (): Promise<ISpecification[]> => {
    const specifications = await prisma.specification.findMany();
    return specifications;
  };
}

export { PrismaSpecificationsRepository };
