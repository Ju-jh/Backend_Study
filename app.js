import express from 'express';
import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
import { sequelize } from './db/database.js';

dotenv.config();

const app = express();

// json 불러오기
app.use(express.json());

// cookieParser
// app.use(cookieParser());

// env
const connection = process.env;

// db연결
sequelize.sync({ force: false }).then(() => {
    console.log(`Server connection on mysql`);
});

// 서버 연결
app.listen(connection.HOST_PORT, () => {
    console.log(`Server listening on port ${connection.HOST_PORT}`);
});
