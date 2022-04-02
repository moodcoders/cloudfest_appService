// model for services collection

import { Schema, model } from 'mongoose';

const ServiceSchema: Schema = new Schema({
    name: String,
    isDisabled: {
        type: Boolean,
        default: false
    },
    imgUrl: String
});

export default model('Services', ServiceSchema);