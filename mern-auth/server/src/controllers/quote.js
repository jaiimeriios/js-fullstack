import jwt from 'jsonwebtoken';
import UserModel from '../models/users.js';

// GET
export const getQuote = async (req, res) => {

    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, process.env.JWT);
        const user = await UserModel.findOne({ email: decoded.email });

        res.json({ status: 'ok', user });
    } catch (e) {
        console.log(e);
        res.json({ status: 'error', error: 'Invalid token' });
    }
};

// POST
export const postQuote = async (req, res) => {

    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, process.env.JWT);
        const newQuote = req.body.quote;
        
        await UserModel.updateOne(
            { email: decoded.email },
            { $set: { quote: newQuote } }
        );

        return res.json({ status: 'ok', newQuote });
    } catch (e) {
        console.log(e);
        res.json({ status: 'error', error: 'Invalid token' });
    }
};
