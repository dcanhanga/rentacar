import bcrypt from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { type ICreateUserDTO } from '@accounts/dtos';
import { IUsersRepository } from '@accounts/repositories/interface/IUsersRRepository';

@injectable()
class CreateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) {}

  execute = async ({ password, driver_license, email, name }: ICreateUserDTO): Promise<void> => {
    const password_hash = await bcrypt.hash(password, 6);
    await this.usersRepository.create({ driver_license, email, name, password_hash });
  };
}

export { CreateUsersUseCase };
