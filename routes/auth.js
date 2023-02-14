import express from 'express';
import * as authController from '../controller/auth.js';
import * as validate from '../middleware/validator.js';

const router = express.Router();

// 회원가입 url 할당
router.post('/signup', validate.validate, authController.signup);

// 로그인 url 할당
router.post('/login', authController.login);

// export
export default router;
