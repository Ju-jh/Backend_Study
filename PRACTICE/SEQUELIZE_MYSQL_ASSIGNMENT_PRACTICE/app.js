import express from 'express';
import { sequelize } from './model/database.js';

import authRoute from './routes/auth.js';
import postRoute from './routes/post.js';

import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

// json 불러오기
app.use(express.json());

// env
const connection = process.env;

// cookieParser
app.use(cookieParser());

// middleware 연결
app.use('/', authRoute); // 로그인 url 할당
app.use('/posts', postRoute); // 게시글 url 할당

// db연결
sequelize.sync({ force: false }).then(() => {
    console.log(`Server connection on mysql`);
});

// 서버 연결
app.listen(connection.HOST_PORT, () => {
    console.log(`Server listening on port ${connection.HOST_PORT}`);
});
