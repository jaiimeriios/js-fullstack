import express from 'express';
const router = express.Router();

import {
    getAllTodos,
    getTodo,
    postTodo,
    patchTodo,
    deleteTodo
} from '../controllers/todos.js';

router.get('/', getAllTodos);
router.get('/:id', getTodo);
router.post('/', postTodo);
router.patch('/:id', patchTodo);
router.delete('/:id', deleteTodo);

export default router;