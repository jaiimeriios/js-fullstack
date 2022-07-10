// import mongoose from 'mongoose';
import UsersModel from '../models/users.js';
import chalk from 'chalk';


// GET
export const getAllUsers = async (req, res) => {
    const user = await UsersModel.find({});
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                user,
            },
        });
        console.log(chalk.bgMagenta(' GET - ALL USER:: '), user);
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
}

export const getUser = async (req, res) => {
    const user = await UsersModel.findById(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                user,
            },
        });
        console.log(chalk.bgMagenta(' GET - USER:: '), user);
    } catch (err) {
        console.log(err);
    }
}


// POST
export const postUser = async (req, res) => {
    const { name, age, username } = req.body;
    try {
        const user = await UsersModel.create({ name, age, username });
        res.status(200).json(user);
        console.log(chalk.bgGreen(' POST - USER:: '), user);
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
}


// PATCH
export const patchUser = async (req, res) => {
    const user = await UsersModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                user,
            },
        });
        console.log(chalk.bgBlue(' PATCH - USER:: '), user);
    } catch (err) {
        console.log(err);
    }
}


// DELETE
export const deleteUser = async (req, res) => {
    await UsersModel.findByIdAndDelete(req.params.id);
    try {
        res.status(204).json({
            status: 'Success',
            data: {},
        });
        console.log(chalk.bgRed(' DELETE - USER:: '));
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err,
        });
    }
}