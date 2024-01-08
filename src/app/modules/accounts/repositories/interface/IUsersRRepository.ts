import { type IUser as User } from '../../entities';
interface IUser {
  name: string;
  password_hash: string;
  email: string;
  driver_license: string;
}
interface IUsersRepository {
  create: (data: IUser) => Promise<void>;
  findByEmail: (email: string) => Promise<User | null>;
}

export type { IUsersRepository, IUser };
