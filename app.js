import dotenv from 'dotenv';
import express from 'express';
import database from './model/database.js';

import authRoute from './routes/auth.js';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use('/', authRoute);

database();

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
