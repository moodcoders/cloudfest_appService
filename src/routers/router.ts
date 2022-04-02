import { Router } from 'express';

import { createBooking, updateBooking, getBooking, deleteBooking, getBookings } from '../controllers/bookingControlers';

export const bookingRouter: Router = Router();

bookingRouter.post( '/', createBooking );
bookingRouter.patch( '/', updateBooking );
bookingRouter.get( '/', getBooking );
bookingRouter.delete( '/', deleteBooking );


export const bookingsRouter: Router = Router();

bookingRouter.get( '/', getBookings );


