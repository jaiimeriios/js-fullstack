import express from 'express';
const router = express.Router();

import {
    signupUserController,
    loginUserController,
} from '../controllers/authUsersController.js';

router.post('/signup', signupUserController);
router.post('/login', loginUserController);

// export Routes to index
export default router
