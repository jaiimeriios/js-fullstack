import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import chalk from 'chalk';

import usersRoutes from './src/routes/users.js';
import todosRoutes from './src/routes/todos.js';

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES
app.get('/', (req, res) => {
    res.send(`
        <h1>Home Page - MongoDB API!</h1>
        <br>
        <a href="users">Users</a>
        <br><br>
        <a href="todos">Todos</a>
    `);
});

app.use('/users', usersRoutes);
app.use('/todos', todosRoutes);

app.all('*', (req, res) => {
    res.send("You've tried reaching a route that doesn't exist.");
});

// connect to MongoDB using mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.clear();
        console.log(chalk.bgCyan(' Connected to MongoDB '));
        app.listen(PORT, () => {
            console.log('Server running on:', chalk.bgGreen(` http://localhost:${PORT} `));
        });
    })
    .catch((e) => {
        console.log(chalk.red(e));
    });