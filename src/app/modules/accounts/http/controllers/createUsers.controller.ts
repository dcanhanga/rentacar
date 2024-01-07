import { type Request, type Response } from 'express';
import { container } from 'tsyringe';

import { type ICreateUserDTO } from '@accounts/dtos';
import { CreateUsersUseCase } from '@accounts/useCases/createUsers.useCase';
import { usersBodySchema } from '@utils/validations/zod';
class CreateUsersController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const createUsersUseCase = container.resolve(CreateUsersUseCase);

    const data: ICreateUserDTO = { ...usersBodySchema.parse(request.body) };
    await createUsersUseCase.execute(data);
    return response.send();
  };
}
export const createUsersController = new CreateUsersController();
