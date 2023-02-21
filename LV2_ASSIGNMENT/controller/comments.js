import * as commentRepository from '../model/comments.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export async function createComment(req, res) {
    const token = req.headers.cookie;
    const authToken = token.split('20')[1];
    const decodedToken = jwt.decode(authToken);

    const { comment } = req.body;
    await commentRepository.create(
        comment,
        decodedToken.userId,
        decodedToken.nickname
    );
    res.status(201).json({ message: '게시글 작성에 성공하였습니다.' });
}

export async function getComment(req, res) {
    const data = await commentRepository.getAll();
    const arr = [];
    for (let i = 0; i < data.length; i++) {
        const temp = {
            commentId: data[i].commentId,
            userId: data[i].userId,
            nickname: data[i].nickname,
            comment: data[i].comment,
            createdAt: data[i].createdAt,
            updatedAt: data[i].updatedAt,
        };
        arr.push(temp);
    }
    res.status(200).json({ Comments: arr });
}

export async function correctionComment(req, res) {
    const { commentId } = req.params;
    const { comment } = req.body;
    const findcommentId = await commentRepository.getById(parseInt(commentId));

    if (!findcommentId) {
        return res
            .status(404)
            .json({ errorMessage: '게시글이 존재하지 않습니다.' });
    }

    if (findcommentId.userId !== req.userId) {
        return res
            .status(403)
            .json({ errorMessage: '로그인이 필요한 기능입니다.' });
    }
    await commentRepository.update(commentId, comment);
    res.status(200).json({ message: '댓글을 수정하였습니다.' });
}

export async function deleteComment(req, res) {
    const { commentId } = req.params;

    await commentRepository.deleteId(commentId);
    res.status(200).json({ message: '댓글을 삭제하였습니다.' });
}
