import * as postRepository from '../model/posts.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

//게시글 생성
export async function createPost(req, res) {
    //토큰
    const token = req.cookies.Authorization;
    const splitedToken = token.split(' ')[1];
    const decodedToken = jwt.decode(splitedToken);
    //게시글
    const { title, content } = req.body;
    await postRepository.create(title, content, decodedToken.userId);
    res.status(201).json({ message: '게시글 작성에 성공하였습니다.' });
}

//게시글 조회
export async function getAllPost(req, res, next) {
    const nickname = req.query.nickname;
    const data = await (nickname
        ? postRepository.findByUserName(nickname)
        : postRepository.getAll());
    res.status(200).json({ post: [data] });
}

//게시글 상세조회
export async function getAllByIdPost(req, res, next) {
    const { postId } = req.params;
    const findId = await postRepository.getById(postId);
    if (findId !== null) {
        res.status(200).json({ post: findId });
    } else {
        res.status(404).json({ errorMessage: '게시글 조회에 실패하였습니다.' });
    }
}

//게시글 수정
export async function updatePost(req, res, next) {
    const { postId } = req.params;
    const { title, content } = req.body;
    const updatefind = await postRepository.getById(postId);
    if (!updatefind) {
        return res
            .status(404)
            .json({ errorMessage: '게시글 번호가 존재하지 않습니다.' });
    }
    if (updatefind.userId !== req.userId) {
        return res
            .sendStatus(403)
            .json({ errorMessage: '로그인이 필요한 기능입니다.' });
    }
    await postRepository.update(postId, title, content);
    res.status(200).json({ message: '게시글을 수정하였습니다.' });
}

//게시글 삭제
export async function deletePost(req, res, next) {
    const { postId } = req.params;
    const deletefind = await postRepository.getById(postId);
    if (!deletefind) {
        return res
            .status(404)
            .json({ errorMessage: '게시글이 존재하지 않습니다.' });
    }
    if (deletefind.userId !== req.userId) {
        return res
            .status(403)
            .json({ errorMessage: '로그인이 필요한 기능입니다.' });
    }
    await postRepository.remove(postId);
    res.status(200).json({ message: '게시글을 삭제하였습니다.' });
}
