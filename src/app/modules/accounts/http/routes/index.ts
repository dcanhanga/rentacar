import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { usersRoutes } from './users.routes';

const accountsRouter = Router();

accountsRouter.use('/users', usersRoutes);
accountsRouter.use(authenticateRoutes);
export { accountsRouter };
