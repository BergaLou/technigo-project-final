import { Swear } from '../models/Swear.js';

export const getSwears = async (req, res) => {
    try {
        const swears = await Swear.find().sort({ createdAt: -1 });
        res.json(swears);
    } catch (err) {
        res.status(500).json({ message: 'Cant pick up the challenge', error: err });
    }
};

export const createSwear = async (req, res) => {
    try {
        const { goal, user } = req.body;
        const newSwear = await new Swear({ goal, user }).save();
        res.status(201).json(newSwear);
    } catch (err) {
        res.status(400).json({ message: 'Cant create the challenge', error: err });
    }
}