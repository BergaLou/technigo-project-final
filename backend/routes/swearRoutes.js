import express from 'express';
import { getSwears, createSwear } from '../controllers/swearController.js';

const router = express.Router();

router.get('/', getSwears);
router.post('/', createSwear);

export default router;