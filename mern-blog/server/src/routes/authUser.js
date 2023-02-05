const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const User = require('../models/user');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const UserDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(UserDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const match = bcrypt.compareSync(password, userDoc.password);
    if (match) {
        jwt.sign(
            { username, id: userDoc._id },
            process.env.JWT_SECRET,
            {},
            (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({ id: userDoc._id, username });
            }
        );
    } else {
        res.status(400).json('Wrong Credentials');
    }
});

router.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

router.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok');
});

module.exports = router;
