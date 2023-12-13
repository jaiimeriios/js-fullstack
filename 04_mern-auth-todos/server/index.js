import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT;

import authUsersRoute from './src/routes/authUsersRoute.js';

// MIDDLEWARE =-=-=-=-=-=-=-=
app.use(express.json());

app.use((req, res, next) => {
    // logs what route is requested
    console.log(':: REQUEST :: ', req.method, req.path);
    next();
});

// ROUTES =-=-=-=-=-=-=-=-=-=
app.get('/', (req, res) => {
    // res.json({ mssg: 'welcome to the app' });
    res.send('<h1>Home Page</h1><br><a href="/">home</a>');
});

app.use('/', authUsersRoute);

app.all('*', (req, res) => {
    res.send("You've tried reaching a route that doesn't exist.");
});

// connect to MongoDB using mongoose and start Server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests after connecting to DB
        app.listen(port, () => {
            console.log(`Listening on http://localhost:${port}`);
        });
    })
    .catch((e) => {
        console.log(e);
    });
