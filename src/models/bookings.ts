// model for bookings collection
import mongoose from 'mongoose';
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

const RatingSchema = new Schema({
    feedback: String,
    rating: {
        type: Number,
        default: 0
    }
})
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
        type: mongoose.Types.ObjectId
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
        type: RatingSchema
    }
});

export default model('bookings', BookingSchema);