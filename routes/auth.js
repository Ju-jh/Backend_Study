import express from 'express';
import * as authController from '../controller/auth.js';
import { body } from 'express-validator';
import { ValidationError } from 'sequelize';

const router = express.Router();

// const validateCredential = [
//     body('nickname')
//         .trim()
//         .notEmpty()
//         .isLength({ min: 3 })
//         .withMessage('nickname should be at least 3 characters'),
//     body('password')
//         .trim()
//         .isLength({ min: 4 })
//         .withMessage('password should be at least 4 characters'),
//     validator,
// ];

// 회원가입
router.post('/signup', authController.signup);

// // 로그인
// router.post('/login', )

// export
export default router;
