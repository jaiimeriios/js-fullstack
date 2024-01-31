import { connectDB } from './connectDB';
import { Post, User } from './models';

export const getPosts = async () => {
    try {
        connectDB();
        const posts = await Post.find();
        return posts;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch post');
    }
};

export const getPost = async (slug) => {
    try {
        connectDB();
        const post = await Post.findOne({ slug });
        return post;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch post');
    }
};

export const getUser = async (id) => {
    try {
        connectDB();
        const user = await User.findById(id);
        return user;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch user');
    }
};

export const getAllUsers = async () => {
    try {
        connectDB();
        const users = await User.find();
        return users;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch users');
    }
};
