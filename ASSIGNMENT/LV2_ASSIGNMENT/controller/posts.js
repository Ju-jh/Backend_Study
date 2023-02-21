import * as postRepository from '../model/posts.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function createPost(req, res) {
    const token = req.headers.cookie;
    const splitedToken = token.split('20')[1];
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

export async function getPost(req, res) {
    const data = await postRepository.getAll();
    const arr = [];
    for (let i = 0; i < data.length; i++) {
        const temp = {
            postId: data[i].postId,
            userId: data[i].userId,
            nickname: data[i].nickname,
            title: data[i].title,
            content: data[i].content,
            createdAt: data[i].createdAt,
            updatedAt: data[i].updatedAt,
        };
        arr.push(temp);
    }
    res.status(200).json({ posts: arr });
}

export async function getDetailPost(req, res) {
    const { postId } = req.params;
    const detailPost = await postRepository.getById(parseInt(postId));
    const temp = {
        postId: detailPost[0].postId,
        userId: detailPost[0].userId,
        nickname: detailPost[0].nickname,
        title: detailPost[0].title,
        content: detailPost[0].content,
        createdAt: detailPost[0].createdAt,
        updatedAt: detailPost[0].updatedAt,
    };
    res.json({ data: temp });
}

export async function correctionPost(req, res) {
    const { postId } = req.params;
    const { title, content } = req.body;
    const findpostId = await postRepository.getById(parseInt(postId));

    if (!findpostId) {
        return res
            .status(404)
            .json({ errorMessage: '게시글이 존재하지 않습니다.' });
    }

    if (findpostId.userId !== req.userId) {
        return res
            .status(403)
            .json({ errorMessage: '로그인이 필요한 기능입니다.' });
    }
    await postRepository.update(postId, title, content);
    res.status(200).json({ message: '게시글을 수정하였습니다.' });
}

export async function deletePost(req, res) {
    const { postId } = req.params;

    await postRepository.deleteId(postId);
    res.status(200).json({ message: '게시글을 삭제하였습니다.' });
}
