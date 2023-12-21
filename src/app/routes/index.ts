import { CarsRoutes } from '@modules/cars/routes/index.routes';
import { Router } from 'express';

const routes = Router();

routes.use(CarsRoutes);

export { routes };
