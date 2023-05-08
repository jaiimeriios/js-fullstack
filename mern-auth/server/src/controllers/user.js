import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/users.js';

// REGISTER
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const cryptPassword = await bcrypt.hash(password, 10);
        const user = await UserModel.create({
            name,
            email,
            password: cryptPassword,
        });
        return res.json({ status: 'ok', user });
    } catch (e) {
        console.log(e);
        res.json({ status: 'error', error: e });
    }
};

// LOGIN
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({
        email,
    });

    if (!user) {
        return { status: 'error', error: 'invalid password' };
    }

    const isPasswordValid = bcrypt.compare(password, user.password);

    if (isPasswordValid) {
        const token = jwt.sign(
            {
                id: user._id,
                name: user.name,
                email: user.email,
                password: user.password,
            },
            process.env.JWT
        );
        return res.json({ status: 'ok', token: token });
    } else {
        return res.json({ status: 'error', user: false });
    }
};
