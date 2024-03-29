import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema(
    {
        userid: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

// 'user' is the name of the collection on mongoDB
// 'UsersSchema' is the object that mirrors the collection

const UsersModel = mongoose.model('user', UsersSchema);

export default UsersModel;