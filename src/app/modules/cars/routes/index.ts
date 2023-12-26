import { Router } from 'express';
import { categoriesRoutes } from './categories.routes';

const carsRoutes = Router();

carsRoutes.use('/categories', categoriesRoutes);
export { carsRoutes };
