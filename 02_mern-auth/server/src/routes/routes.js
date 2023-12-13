import express from 'express';
const router = express.Router();

import { registerUser, loginUser } from '../controllers/user.js';
import { getQuote, postQuote } from '../controllers/quote.js';

// USER
router.post('/register', registerUser);
router.post('/login', loginUser);

// QUOTE
router.get('/quote', getQuote);
router.post('/quote', postQuote);

export default router;
