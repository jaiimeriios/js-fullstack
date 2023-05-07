import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        quote: { type: String },
    },
    { timestamps: true }
);

const UsersModel = mongoose.model('User', UsersSchema);

export default UsersModel;
