import mongoose from 'mongoose';

const connection = {};

export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log('CONNECTED');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    } catch (e) {
        console.log(e)
        throw new Error(e);
    }
};
