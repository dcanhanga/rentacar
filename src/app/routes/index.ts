import { Router } from 'express';

import { carsRoutes } from '@modules/cars/http/routes';

const router = Router();

router.use(carsRoutes);

export { router };
