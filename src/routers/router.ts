import { Router } from 'express';

import { createServices, getServices, getAllServices } from '../controllers/servicesControllers';
import { createBooking, updateBooking, getBooking, deleteBooking, getBookings } from '../controllers/bookingControllers';
import { updateReview, getReview, deleteReview } from '../controllers/reviewControllers';

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
servicesRouter.get( '/listAll', getAllServices );

