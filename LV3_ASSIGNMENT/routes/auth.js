import express from 'express';
import * as authController from '../controller/auth.js';
import * as validate from '../middleware/validator.js';

const router = express.Router();

router.post('/signup', validate.validate, authController.signup);

router.post('/login', authController.login);

export default router;
