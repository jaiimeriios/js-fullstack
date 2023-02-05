require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT;

const authUsersRoutes = require('./src/routes/authUser');

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.ORIGIN_URL }));
app.use(cookieParser())


app.use('/', authUsersRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Listening on http://localhost:${port}`);
        });
    })
    .catch((e) => {
        console.log(e);
    });
