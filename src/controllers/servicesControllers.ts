import { Request, Response } from 'express';
import services from '../models/services';
import logger from '../utils/logger';

export const createServices = async (req: Request, res: Response,) => {
    try {
        console.log(req.body);
        const newService = await new services(req.body);
        newService.save()
        res.json(newService);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(400);
    }
};

export const getServices = async (req: Request, res: Response) => {
    try {
        const servicesList = await services.find({ name:req.query.name});
        res.json(servicesList);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(400);
    }
}
