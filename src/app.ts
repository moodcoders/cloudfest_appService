import express, { Express } from 'express';
import morgan from 'morgan'

import { bookingRouter, bookingsRouter, reviewRouter, servicesRouter } from './routers/router';
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

app.use('/v1/booking', bookingRouter);
app.use('/v1/bookings', bookingsRouter);
app.use('/v1/review', reviewRouter);
app.use('/v1/services', servicesRouter);

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

