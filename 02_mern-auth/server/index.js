import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './src/routes/routes.js';

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send(`<h1>MERN JWT</h1>`);
});

app.use('/', routes);

// MONGODB connection and Server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.clear();
        console.log('Connected to MongoDB ');
        app.listen(PORT, () => {
            console.log(`Running on: http://localhost:${PORT}`);
        });
    })
    .catch((e) => {
        console.log(e);
    });
