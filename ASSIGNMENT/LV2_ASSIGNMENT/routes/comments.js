import express from 'express';
import * as commentController from '../controller/comments.js';
import { isAuth } from '../middleware/auth.js';
const router = express.Router();

router.post('/comments', isAuth, commentController.createComment);

router.get('/comments', commentController.getComment);

router.put('/comments/:commentId', isAuth, commentController.correctionComment);

router.delete('/comments/:commentId', isAuth, commentController.deleteComment);

export default router;
