const jwt = require('jsonwebtoken');
const Authuser = require('../models/authUsers');

const jwtToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// Signup user -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // register user to DB & 'signup' comes from "AuthUsersSchema.statics.signup"
        const authuser = await Authuser.signup(email, password);

        // create token
        const token = jwtToken(authuser._id);

        res.status(200).json({ email, token });
        console.log('USER SIGNUP :: ' + email);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
};

// login user =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const authuser = await Authuser.login(email, password);
        const token = jwtToken(authuser._id);
        res.status(200).json({ email, token });
        console.log('USER LOGIN :: ' + email);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
};

// Export to /routes
module.exports = { signupUser, loginUser };