import express from 'express';
import * as postController from '../controller/posts.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', isAuth, postController.createPost);

router.get('/', postController.getPost);

router.get('/:postId', postController.getDetailPost);

router.put('/:postId', postController.correctionPost);

router.delete('/:postId', postController.deletePost);

export default router;
