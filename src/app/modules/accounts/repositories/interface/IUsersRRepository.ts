interface IUser {
  name: string;
  password_hash: string;
  email: string;
  driver_license: string;
}
interface IUsersRepository {
  create: (data: IUser) => Promise<void>;
}

export type { IUsersRepository, IUser };
