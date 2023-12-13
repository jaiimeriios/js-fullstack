import jwt from 'jsonwebtoken';
import authUsersModel from '../models/authUsersModel.js';

const jwtToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};

// SIGNUP
const signupUserController = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const authUser = await authUsersModel.authUserSignup(
            username,
            email,
            password
        );

        // create token
        const token = jwtToken(authUser._id);

        res.status(200).json({ username, email, token });
        console.log('USER SIGNUP :: ' + email);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
};




// LOGIN
const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const authuser = await authUsersModel.authUserlogin(email, password);
        const token = jwtToken(authuser._id);
        res.status(200).json({ email, token });
        console.log('USER LOGIN :: ' + email);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e.message });
    }
};

// Export controller function to Routes
export { loginUserController, signupUserController };
