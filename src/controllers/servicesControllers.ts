import { Request, Response } from 'express';
import services from '../models/services';
import logger from '../utils/logger';

export const createServices = async (req: Request, res: Response,) => {
    try {
        console.log(req.body);
        const newService = await new services(req.body);
        newService.save()
        res.send({
            message: 'new service created',
            data: newService
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    }
};

export const getServices = async (req: Request, res: Response) => {
    try {
        const servicesList = await services.find({ name: req.query.name });
        res.send({
            message: 'name wise services fetched',
            data: servicesList
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    }
};

export const getAllServices = async (req: Request, res: Response) => {
    try {
        const servicesList = await services.find({});
        res.send({
            message: 'all services listed',
            data: servicesList
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    }
};
