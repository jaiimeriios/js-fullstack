import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            max: 50,
        },
        password: {
            type: String,
            require: true,
            min: 6,
        },
        img: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timeStamps: true,
    }
);

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        img: {
            type: String,
        },
        userId: {
            type: String,
            require: true,
        },
        slug: {
            type: String,
            require: true,
            unique: true,
        },
    },
    {
        timeStamps: true,
    }
);

export const User = mongoose.models.user || mongoose.model('user', userSchema);
export const Post = mongoose.models.post || mongoose.model('post', postSchema);
