import mongoose from 'mongoose';

const swearSchema = new mongoose.Schema({
    goal: {
        type: String,
        required: [true, 'Your challenge, your goal'],
        minlength: 5,
        maxlength: 140
    },
    user: {
        type: String,
        required: true
    },
    pepCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Swear = mongoose.model('Swear', swearSchema)