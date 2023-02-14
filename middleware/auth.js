// 토큰 유효성 검사 만들기

// jwt 토큰 생성기
import jwt from 'jsonwebtoken';
// 유저 가져오기?
import { User } from '../data/auth.js';
// dotenv 가져오기
import dotenv from 'dotenv';
dotenv.config();

// 비밀키 env 파일내에 있는 SECRETKEY
const secretKey = process.env.SECRETKEY;

// 사용자 인증 미들웨어
export const isAuth = async (req, res, next) => {
    const { Authorization } = req.cookies;
    const [authType, authToken] = (Authorization ?? '').split(' '); // ?? 널 병합 연산자 ?? 왼쪽이 비엇거나 null인 경우 오른쪽으로 바꿔줌

    // 쿠키가 존재하지 않았을 때를 때비
    if (!authToken || authType !== 'Bearer') {
        res.status(401).send({
            errorMessage: '로그인 후 이용 가능한 기능입니다.',
        });
        return;
    }

    try {
        // 토큰 만료를 확인,토큰이 서버 발급 토큰이 맞는지를 검증
        const check = jwt.verify(authToken, secretKey);
        if (!check) {
            return res.status(403).json({
                errorMessage: '전달된 쿠키에서 오류가 발생하였습니다.',
            });
        }

        // 토큰의 아이디가 실제 DB에 있는지 확인
        const decodedToken = jwt.decode(authToken);
        const test = await User.findByPk(decodedToken);
        console.log(decodedToken);
        console.log(test);
        if (test == null) {
            return res
                .status(403)
                .json({ errorMessage: '계정이 존재하지 않습니다.' });
        }
        next();
    } catch (err) {
        console.error(err);
        res.status(401).send({
            errorMessage: '로그인 후 이용 가능한 기능입니다.',
        });
    }
};
