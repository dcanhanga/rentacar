import { Router } from 'express';

import { usersRoutes } from './users.routes';

const accountsRouter = Router();

accountsRouter.use('/users', usersRoutes);
export { accountsRouter };
