import * as postRepository from '../model/posts.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function createPost(req, res) {
    const token = req.headers.cookie;
    const splitedToken = token.split(20)[1];
    const decodedToken = jwt.decode(splitedToken);

    const { title, content } = req.body;
    await postRepository.create(
        title,
        content,
        decodedToken.userId,
        decodedToken.nickname
    );
    res.status(201).json({ message: '게시글 작성에 성공하였습니다.' });
}
