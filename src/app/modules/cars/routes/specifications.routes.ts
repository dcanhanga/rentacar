import { Router } from 'express';

import { createSpecificationController } from '@cars/useCases/specification/CreateSpecification';
import { listSpecificationsController } from '@cars/useCases/specification/ListSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', createSpecificationController.handle);
specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
