import express from 'express';
import * as authController from '../controller/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
const router = express.Router();

const validateCredential = [
    body('nickname')
        .trim()
        .notEmpty()
        // 닉네임은 최소 3자이상
        .isLength({ min: 3 })
        .withMessage('nickname should be at least 3 characters'),
    body('password')
        .trim()
        // 비밀번호는 최소 4자이상
        .isLength({ min: 4 })
        .withMessage('password should be at least 4 characters'),
    validate,
];

// 회원가입 url 할당
router.post('/signup', validateCredential, authController.signup);

// 로그인 url 할당
router.post('/login', authController.login);

// export
export default router;
