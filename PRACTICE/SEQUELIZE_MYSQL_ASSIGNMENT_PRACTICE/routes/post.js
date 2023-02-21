import express from 'express';
import * as postController from '../controller/posts.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

//게시글 작성
router.post('/', isAuth, postController.createPost);

//게시글 조회
router.get('/', postController.getAllPost);

//게시글 상세 조회
router.get('/:postId', postController.getAllByIdPost);

//게시글 수정
router.put('/:postId', postController.updatePost);

// 게시글 삭제
router.delete('/:postId', postController.deletePost);

export default router;
