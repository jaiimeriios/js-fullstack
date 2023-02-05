const mongoose = require('mongoose');

const PostSchrema = new mongoose.Schema(
    {
        title: String,
        content: String,
        cover: String,
        content: String,
    },
    { timestamps: true }
);

const PostModel = mongoose.model('Post', PostSchrema);

module.exports = PostModel;
