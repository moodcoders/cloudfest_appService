import { Request, Response } from 'express';
import bookings from '../models/bookings';
import logger from '../utils/logger';

export const updateReview = async (req: Request, res: Response) => {
    try {
        const update = await bookings.findByIdAndUpdate(req.body.id, { rating: req.body.rating });
        res.send({
            message: 'review updated',
            data: update
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    };
};

export const getReview = async (req: Request, res: Response) => {
    try {
        const booking = await bookings.findById({ _id: req.query.id });
        res.send({
            message: 'updated review',
            data: booking.review
        });
        } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    };
};

export const deleteReview = async (req: Request, res: Response) => {
    try {

        await bookings.findByIdAndUpdate( req.query.id , { rating: { feedback: "", rating: 0 } });
        res.send({
            message: 'delteded review',
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    };
};