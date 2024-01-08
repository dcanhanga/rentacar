import { type IUser as User } from '@accounts/entities';
import {
  type IUsersRepository,
  type IUser
} from '@accounts/repositories/interface/IUsersRRepository';
import { prisma } from '@utils/prisma';

class PrismaUserRepository implements IUsersRepository {
  findByEmail = async (email: string): Promise<User | null> => {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  };

  create = async (data: IUser): Promise<void> => {
    const { driver_license, email, name, password_hash } = data;
    await prisma.user.create({ data: { driver_license, email, name, password_hash } });
  };
}

export { PrismaUserRepository };
