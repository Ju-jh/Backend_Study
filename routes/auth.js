import express from 'express';
import * as authController from '../controller/auth.js';

const router = express.Router();

//회원가입
router.post('/signup', authController.signup);

export default router;
