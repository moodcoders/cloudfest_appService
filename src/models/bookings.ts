// model for bookings collection

import { Schema, model } from 'mongoose';

const HandymanSchema = new Schema({
    name: {
        type: String
    },
    rating: {
        type: Number
    },
    experience: {
        type: Number
    },
    profile: {
        type: String
    }
});

const BookingSchema = new Schema({
    location: {
        type: String
    },
    serviceType: {
        type: String
    },
    schedule: {
        type: Date
    },
    rate: {
        type: Number
    },
    isCompleted: {
        type: Boolean
    },
    handyman: HandymanSchema,
    userId: {
        type: String
    },
    isPaid: {
        type: Boolean
    },
    paymenType: {
        type: String
    },
    feedback: {
        type: String
    },
    // rating can +ve integer value between
    // [1-5] and null incase of a service whose rating is not given
    rating: {
        type: Schema.Types.Mixed
    }
});

export default model('bookings', BookingSchema);