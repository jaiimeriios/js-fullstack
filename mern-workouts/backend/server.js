require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;

const workoutRoutes = require('./src/routes/workouts');

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(':: REQUEST :: ', req.method, req.path);
    next();
});

// routes
app.get('/', (req, res) => {
    // res.json({ mssg: 'welcome to the app' });
    res.send('<h1>Home Page</h1><br><a href="/workouts">workouts</a>')
});

app.use('/workouts', workoutRoutes);

app.all('*', (req, res) => {
    res.send("You've tried reaching a route that doesn't exist.");
});

// connect to MongoDB using mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests after connecting to DB
        app.listen(port, () => {
            console.log(`Listening on http://localhost:${port}`);
        });
    })
    .catch((e) => {
        console.log(e);
    });