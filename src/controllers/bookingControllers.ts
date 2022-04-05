import { Request, Response } from 'express';
import bookings from '../models/bookings';
import logger from '../utils/logger';

export const createBooking = async (req: Request, res: Response,) => {
    try {
        const booking =  new bookings(req.body);
        const Booking = await booking.save();
        res.send({
            message: 'new booking created',
            data: Booking
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    };
};

export const updateBooking = async (req: Request, res: Response) => {
    try {

        const update = await bookings.findByIdAndUpdate(req.query.id, req.body);
        res.send({
            message: 'booking successfully updated',
            data: update
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    }
};

export const getBooking = async (req: Request, res: Response) => {
    try {
        const update = await bookings.findById(req.query.id);
        res.send({
            message: 'booking fetched',
            data: update
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    };
};


export const deleteBooking = async (req: Request, res: Response) => {
    try {
        await bookings.findByIdAndDelete(req.query.id);
        res.send({
            message: 'booking deleted',
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    };
};

export const getBookings = async (req: Request, res: Response) => {
    try {
        const bookingList = await bookings.find({ userId: req.query.id }); //TODO: check customer/handyman's _id to verify request 
        res.send({
            message: 'Customers bookings fetched',
            data: bookingList
        });
    } catch (error: any) {
        logger.error(error);
        res.status(400).send({
            message: error.message
        });
    };
}

//TODO: need to implement pagination in get bookings