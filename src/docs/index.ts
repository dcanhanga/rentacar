/* eslint-disable @typescript-eslint/no-unsafe-argument */
import swaggerUI from 'swagger-ui-express';

import { swaggerDoc } from './swaggerDoc';

const url = '/api-docs';
const serve = swaggerUI.serve;
const setup = swaggerUI.setup(swaggerDoc);

export { url, serve, setup };
