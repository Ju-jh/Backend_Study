import express from 'express';
import * as postController from '../controller/posts.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', isAuth, postController.createPost);

export default router;
