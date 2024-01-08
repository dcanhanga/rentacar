import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { type ICreateUserDTO } from '@accounts/dtos';
import { IUsersRepository } from '@accounts/repositories/interface/IUsersRRepository';

import { AppError } from '@/app/utils/errors/appError';

@injectable()
class CreateUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private readonly usersRepository: IUsersRepository
  ) {}

  execute = async ({ password, driver_license, email, name }: ICreateUserDTO): Promise<void> => {
    const emailAlreadyExits = await this.usersRepository.findByEmail(email);
    if (emailAlreadyExits) {
      throw new AppError('Esse email já está cadastrado', 409);
    }
    const password_hash = await hash(password, 6);
    await this.usersRepository.create({ driver_license, email, name, password_hash });
  };
}

export { CreateUsersUseCase };
