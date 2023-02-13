import { validationResult } from 'express-validator';

// (2-2)(4-2) 기본 유효성 검사
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(400).json({ message: errors.array()[0].msg });
};
