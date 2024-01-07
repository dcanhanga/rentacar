import { Router } from 'express';

import { createUsersController } from '@accounts/http/controllers/createUsers.controller';

const usersRoutes = Router();

usersRoutes.post('/', createUsersController.handle);

export { usersRoutes };
