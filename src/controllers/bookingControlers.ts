import { Request, Response } from 'express';
import bookings from '../models/bookings';

export const createBooking = async (req: Request, res: Response, ) => {
    try {
        console.log(req.body);
        const update = await new bookings(req.body);
        update.save()
        res.json(update);
    } catch (error: any) {
         res.sendStatus(400);
    }
};

export const updateBooking = async (req: Request, res: Response) => {
    try {
        const filter ={
            "userId": req.body.userId,
        }
        const update = await bookings.findOneAndUpdate(filter, req.body); //TODO: change the model from customer to handyman
        res.json(update);
    } catch (error: any) {
        res.sendStatus(400);
    }
};

export const getBooking = async (req: Request, res: Response) => {
    try{
        const update = await bookings.findOne(); //TODO: change the model from customer to handyman
        res.json(update);
    } catch (error: any) {
        res.sendStatus(400);
    }
}


export const deleteBooking = async (req: Request, res: Response) => {
    try{
         await bookings.deleteOne({ userId: req.body.userId }); //TODO: change the model from customer to handyman
        res.json('booking deleted');
    } catch (error: any) {
        res.sendStatus(400);
    }
}

export const getBookings = async (req: Request, res: Response) => {
    try{
        const update = await bookings.find(); //TODO: change the model from customer to handyman
        res.json(update);
    } catch (error: any) {
        res.sendStatus(400);
    }
}
