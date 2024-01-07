import { Router } from 'express';

import { accountsRouter } from '@accounts/http/routes';
import { carsRoutes } from '@cars/http/routes';

const router = Router();

router.use(carsRoutes);
router.use(accountsRouter);

export { router };
