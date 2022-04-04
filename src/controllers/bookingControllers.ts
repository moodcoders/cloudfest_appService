import { Request, Response } from 'express';
import bookings from '../models/bookings';
import logger from '../utils/logger';

export const createBooking = async (req: Request, res: Response,) => {
    try {
        const booking =  new bookings(req.body);
        const Booking = await booking.save();
        res.json(Booking);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(400);
    }
};

export const updateBooking = async (req: Request, res: Response) => {
    try {
        const update = await bookings.findByIdAndUpdate(req.query.id, req.body);
        res.json(update);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(400);
    }
};

export const getBooking = async (req: Request, res: Response) => {
    try {
        const update = await bookings.findById(req.query.id);
        res.json(update);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(400);
    }
}


export const deleteBooking = async (req: Request, res: Response) => {
    try {
        await bookings.findByIdAndDelete(req.query.id);
        res.json('booking deleted');
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(400);
    }
}

export const getBookings = async (req: Request, res: Response) => {
    try {
        const bookingList = await bookings.find({ userId: req.query.id }); //TODO: check customer/handyman's _id to verify request 
        res.json(bookingList);
    } catch (error: any) {
        logger.error(error);
        res.sendStatus(400);
    }
}

//TODO: need to implement pagination in get bookings