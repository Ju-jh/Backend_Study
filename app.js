import dotenv from 'dotenv';
import express from 'express';
import database from './model/database.js';

import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';

import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use(cookieParser());

app.use('/', authRoute);
app.use('/posts', postRoute);

database();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
