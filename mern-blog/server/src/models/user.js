const mongoose = require('mongoose');

const UserSchrema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 4,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 4,
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model('User', UserSchrema);

module.exports = UserModel;
