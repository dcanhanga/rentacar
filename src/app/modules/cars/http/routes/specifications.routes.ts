import { Router } from 'express';

import { createSpecificationsController } from '../controllers/createSpecifications.controller';

const specificationsRoutes = Router();

specificationsRoutes.post('/', createSpecificationsController.handle);

export { specificationsRoutes };
