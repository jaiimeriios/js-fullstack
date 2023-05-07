import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/users.js';

// REGISTER
router.post('/register', async (req, res) => {
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
});


// LOGIN
router.post('/login', async (req, res) => {
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
});

// GET QUOTE
router.get('/quote', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, process.env.JWT);
        const email = decoded.email;
        const user = await UserModel.findOne({ email: email });
        res.json({ status: 'ok', user });
    } catch (e) {
        console.log(e);
        res.json({ status: 'error', error: 'Invalid token' });
    }
})

// POST QUOTE
router.post('/quote', async (req, res) => {
    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, process.env.JWT);
        const email = decoded.email;
        await UserModel.updateOne(
            { email: email },
            { $set: { quote: req.body.quote } }
        );

        return res.json({ status: 'ok' });
    } catch (e) {
        console.log(e);
        res.json({ status: 'error', error: 'Invalid token' });
    }
});


export default router;
