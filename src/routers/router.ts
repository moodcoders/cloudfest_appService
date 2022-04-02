import { Router } from 'express';

import { createBooking, updateBooking, getBooking, deleteBooking, getBookings } from '../controllers/bookingControlers';
import { updateReview, getReview, deleteReview } from '../controllers/reviewControllers';
import { createServices, getServices } from '../controllers/servicesControllers';

export const bookingRouter: Router = Router();
bookingRouter.post( '/', createBooking );
bookingRouter.patch( '/', updateBooking );
bookingRouter.get( '/', getBooking );
bookingRouter.delete( '/', deleteBooking );

export const bookingsRouter: Router = Router();
bookingsRouter.get( '/', getBookings );

export const reviewRouter: Router = Router();
reviewRouter.patch( '/', updateReview );
reviewRouter.get( '/', getReview );
reviewRouter.patch( '/delete', deleteReview );

export const servicesRouter: Router = Router();
servicesRouter.post( '/', createServices );
servicesRouter.get( '/', getServices );
