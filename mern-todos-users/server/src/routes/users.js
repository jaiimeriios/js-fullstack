import express from 'express';
const router = express.Router();

import {
    getAllUsers,
    getUser,
    postUser,
    patchUser,
    deleteUser,
} from '../controllers/users.js';

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

export default router;