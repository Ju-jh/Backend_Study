const express = require('express');
const router = express.Router();
const User = require('../schemas/user');
const jwt = require('jsonwebtoken');

// 로그인 API
router.post('/auth', async (req, res) => {
    // 이메일, 패스워드를 전달 받음.
    const { email, password } = req.body;

    // DB에서 이메일이 일치하는 유저를 찾는다.
    const user = await User.findOne({ email });

    // 유저가 존재하는지 확인하고, 유저의 패스워드와 입력받은 패스워드가 일치하는지 확인
    // 1. 이메일에 일치하는 유저가 존재하지 않거나,
    // 2. 유저를 찾았지만, 유저의 비밀번호와, 입력한 비밀번호가 다를 때,
    if (!user || user.password !== password) {
        res.status(400).json({
            errorMessage: '로그인에 실패하였습니다.',
        });
        return;
    }

    // 해당 유저도 찾고, 비밀번호도 일치했으면 로그인 성공되어야 함.
    // JWT를 생성시켜야 함.
    const token = jwt.sign({ userId: user.userId }, 'customized-secret-key');

    // Authorization이라는 이름으로 Bearer 형태로 전달한다.
    // Bearer 타입은 JWT를 전달할 때, 어떤 타입으로 쿠키 값을 전달했는지?
    res.cookie('Authorization', `Bearer ${token}`);
    res.status(200).json({ token });
});

module.exports = router;
