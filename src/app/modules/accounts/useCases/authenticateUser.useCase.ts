import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';

import { IUsersRepository } from '../repositories/interface/IUsersRRepository';
import { AppError } from '@utils/errors/appError';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}
@injectable()
class AuthenticateUserUseCase {
  constructor(@inject('UsersRepository') private readonly usersRepository: IUsersRepository) {}

  execute = async ({ email, password }: IRequest): Promise<IResponse> => {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Email or password Incorrect!');
    }
    const passwordMatch = await compare(password, user.password_hash);
    if (!passwordMatch) {
      throw new AppError('Email or password Incorrect!');
    }
    const token = jwt.sign({}, '1c718e15389c944fa75933d293b1eb13', {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      user: {
        name: user.name,
        email: user.email
      },
      token
    };
  };
}
export { AuthenticateUserUseCase };
