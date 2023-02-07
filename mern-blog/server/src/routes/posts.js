const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'src/uploads/' });
const jwt = require('jsonwebtoken');
const fs = require('fs');
const mongoose = require('mongoose');

const Post = require('../models/post');

// GET
router.get('/', async (req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username'])
            .sort({ createdAt: -1 })
            .limit(20)
    );
});

// GET SINGLE by author id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
});

// POST - create new with image file
router.post('/', uploadMiddleware.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = `${path}.${ext}`;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;

    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
        if (err) throw err;

        const { title, summary, content } = req.body;
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        });
        res.json(postDoc);
    });
});

// PUT - Update
router.put('/', uploadMiddleware.single('file'), async (req, res) => {
    let newPath = null;

    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = `${path}.${ext}`;
        fs.renameSync(path, newPath);
    }

    const { token } = req.cookies;

    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, info) => {
        if (err) throw err;

        const { id, title, summary, content } = req.body;
        const postDoc = await Post.findById(id);

        const isAuthor =
            JSON.stringify(postDoc.author) === JSON.stringify(info.id);

        if (!isAuthor) {
            res.status(400).json('You are not the Author');
        }

        await postDoc.update({
            title,
            summary,
            content,
            cover: newPath ? newPath : postDoc.cover,
        });

        res.json(postDoc);
    });
});

// DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findOne({ _id: id });

    if (post) {
        await Post.findOneAndDelete({ _id: id });
        res.status(200).json(post);
        console.log(':: DELETED ::', post);
    } else {
        return res.status(400).json({ error: 'No such post' });
    }
});

module.exports = router;
