import { Request, Response } from 'express';
import bookings from '../models/bookings';
import logger from '../utils/logger';

export const updateReview = async (req: Request, res: Response) => {
    try {
        const update = await bookings.findByIdAndUpdate(req.body.id, { rating: req.body.rating });
        res.json(update);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(500);
    }
};

export const getReview = async (req: Request, res: Response) => {
    try {
        const booking = await bookings.findById({ _id: req.query.id });
        res.json(booking.rating);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(500);
    }
}

export const deleteReview = async (req: Request, res: Response) => {
    try {

        await bookings.findByIdAndUpdate( req.query.id , { rating: { feedback: "", rating: 0 } });
        res.json('review deleted');
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(500);
    }
}