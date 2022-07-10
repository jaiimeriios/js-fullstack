// import mongoose from 'mongoose';
import TodosModel from '../models/todos.js';
import chalk from 'chalk';


// GET
export const getAllTodos = async (req, res) => {
    const todo = await TodosModel.find({});
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                todo,
            },
        });
        console.log(chalk.bgMagenta(' GET - ALL TODO:: '), todo);
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
};

export const getTodo = async (req, res) => {
    const todo = await TodosModel.findById(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                todo,
            },
        });
        console.log(chalk.bgMagenta(' GET - TODO:: '), todo);
    } catch (err) {
        console.log(err);
    }
};


// POST
export const postTodo = async (req, res) => {
    const { title, description, important } = req.body;
    try {
        const todo = await TodosModel.create({ title, description, important });
        res.status(200).json(todo);
        console.log(chalk.bgGreen(' POST - TODO:: '), todo);
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
};


// PATCH
export const patchTodo = async (req, res) => {
    const todo = await TodosModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                todo,
            },
        });
        console.log(chalk.bgBlue(' PATCH - TODO:: '), todo);
    } catch (err) {
        console.log(err);
    }
};


// DELETE
export const deleteTodo = async (req, res) => {
    await TodosModel.findByIdAndDelete(req.params.id);
    try {
        res.status(204).json({
            status: 'Success',
            data: {},
        });
        console.log(chalk.bgRed(' DELETE - TODO:: '));
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
};