const jwt = require('jsonwebtoken');
const User = require('../schemas/user');

module.exports = async (req, res, next) => {
    const { Authorization } = req.cookies;
    // Bearer ewerwe.sdfwewfw.qewrqwerq
    // undefined 를 split 하면 error 날수도 있으니
    // authorization 쿠키가 존재하지 않았을때를 대비해야
    const [authType, authToken] = (Authorization ?? '').split(' ');

    // authType === Bearer 값인지 확인
    // authToken 검증
    if (authType !== 'Bearer' || !authToken) {
        res.status(400).json({
            errorMessage: '로그인 후에 이용할 수 있는 기능입니다.',
        });
        return;
    }

    // JWT 검증
    try {
        // 1. authToken 이 만료되었는지 확인
        // 2. authToken 이 서버가 발급 토큰이 맞는지 검증
        const { userId } = jwt.verify(authToken, 'customized-secret-key');

        // 3. authToken 에 있는 userId 에 해당하는 사용자가 실제 DB에 존재하는지 확인
        const user = await User.findById(userId);
        res.locals.user = user;

        next(); // 이 미들웨어 다음으로 보낸다.
    } catch (error) {
        console.error(error);
        res.status(400).json({
            errorMessage: '로그인 후에 사용할 수 있는 기능입니다.',
        });
        return;
    }
};
