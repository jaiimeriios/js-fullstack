const mongoose = require('mongoose');

const PostSchrema = new mongoose.Schema(
    {
        cover: String,
        title: String,
        summary: String,
        content: String,
        author: {
            type: mongoose.Schema.Types.ObjectId, ref:'User'
        }
    },
    { timestamps: true }
);

const PostModel = mongoose.model('Post', PostSchrema);

module.exports = PostModel;
