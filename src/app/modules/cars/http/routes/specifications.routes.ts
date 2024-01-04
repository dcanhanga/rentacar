import { Router } from 'express';

import { createSpecificationsController } from '../controllers/createSpecifications.controller';
import { listSpecificationsController } from '../controllers/listSpecifications.controller';

const specificationsRoutes = Router();

specificationsRoutes.post('/', createSpecificationsController.handle);
specificationsRoutes.get('/', listSpecificationsController.handle);
export { specificationsRoutes };
