const express = require('express');
const router = express.Router();
const User = require('../schemas/user');
const authMiddleware = require('../middlewares/auth-middleware');

// 내 정보 조회 API
// 움직이는 로직 => /users/me라는 주소로 들어옴 -> 사용자 인증 미들웨어(authMiddleware)를 갔다옴 -> async (req, res)를 진행.
router.get('/users/me', authMiddleware, async (req, res) => {
    const { email, nickname } = res.locals.user;

    res.status(200).json({
        user: {
            email: email,
            nickname: nickname,
        },
    });
});

// 회원가입 API
router.post('/users', async (req, res) => {
    const { email, nickname, password, confirmPassword } = req.body;

    // 패스워드와 패스워드 확인이 성공
    if (password !== confirmPassword) {
        res.status(400).json({
            errorMessage: '패스워드가 패스워드 확인란과 다릅니다.',
        });
        return;
    }

    // email, nickname이 실제로 DB에 존재하는지 확인.
    const existsUsers = await User.findOne({
        $or: [{ email }, { nickname }], // 이메일 또는 닉네임이 일치할 때, 조회한다.
    });
    if (existsUsers) {
        // NOTE: 보안을 위해 인증 메세지는 자세히 설명하지 않는다.
        res.status(400).json({
            errorMessage: '이메일 또는 닉네임이 이미 사용중입니다.',
        });
        return;
    }

    const user = new User({ email, nickname, password });
    await user.save(); // DB에 저장한다.

    res.status(201).json({});
});

module.exports = router;
