import { type Request, type Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from '../../useCases/authenticateUser.useCase';
class AuthenticateController {
  handle = async (request: Request, response: Response): Promise<Response> => {
    const { password, email } = request.body;
    const authenticateUseCase = container.resolve(AuthenticateUserUseCase);
    const authenticateInfo = await authenticateUseCase.execute({ password, email });
    return response.status(200).json(authenticateInfo);
  };
}

export const authenticateController = new AuthenticateController();
