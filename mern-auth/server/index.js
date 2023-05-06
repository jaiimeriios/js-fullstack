import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import User from './models/users.js';

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`<h1>MERN JWT</h1>
    <a href='register'>register</a>
    `);
});

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({
            name,
            email,
            password,
        });
        res.send(user);
    } catch (e) {
        console.log(e);
        res.json({ status: 'error', error: e });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
        email,
        password,
    });

    if (user) {
        return res.json({ status: 'ok', user: true });
    } else {
        return res.json({ status: 'error', user: false });
    }
});

// MONGODB connection and Server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.clear();
        console.log('Connected to MongoDB ');
        app.listen(PORT, () => {
            console.log(`Running on: http://localhost:${PORT}`);
        });
    })
    .catch((e) => {
        console.log(e);
    });
