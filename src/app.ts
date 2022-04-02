import express, { Express } from 'express';
import morgan from 'morgan'

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/app-service.json';
import logger from './utils/logger';

const app: Express = express();

if (process.env.NODE_ENV === 'development') {
    app.use('/api-docs', swaggerUi.serve);
    app.get('/api-docs', swaggerUi.setup(swaggerDocument, {
        explorer: true,
    }));
}

app.use(express.json());
app.use(morgan('dev'));

export default async () => {
    try {
        app.listen(4001, () => {
            logger.info('App Service listening on http://localhost:4001')
        });
    } catch (error) {
        logger.error('An error occured while starting the server');
        throw new Error('An error occured while starting the server');
    }
}