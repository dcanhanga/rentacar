import { Router } from 'express';

import { authenticateController } from '../controllers/authenticateUser.controller';

const authenticateRoutes = Router();
authenticateRoutes.post('/sessions', authenticateController.handle);
export { authenticateRoutes };
