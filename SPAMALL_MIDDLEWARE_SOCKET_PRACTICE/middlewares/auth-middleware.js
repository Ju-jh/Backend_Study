const jwt = require('jsonwebtoken');
const User = require('../schemas/user');

module.exports = async (req, res, next) => {
    const { Authorization } = req.cookies;
    // Bearer ewrwer.wqrwer.wqerqwer
    // undefined;
    // authorization 쿠키가 존재하지 않았을 때를 대비
    const [authType, authToken] = (Authorization ?? '').split(' '); // authorization 변수가 undefined이거나 null 값일 경우 빈 문자열("")로 변경해라. / Bearer와 오른쪽에 있는 JWT 토큰을 분리해주기 위해 split을 쓴다.

    // 1. authType === Bearer 값인지 확인하기
    // 2. authToken 존재 유무 검증하기
    if (authType !== 'Bearer' || !authToken) {
        res.status(400).json({
            errorMessage: '로그인 후에 이용할 수 있는 기능입니다.',
        });
        return;
    }

    try {
        // 1. authToken이 만료되었는지 확인
        // 2. authToken이 서버가 발급한 토큰이 맞는지 확인
        const { userId } = jwt.verify(authToken, 'customized-secret-key');

        // 3. authToken에 있는 userId에 해당하는 사용자가 실제 DB에 존재하는지 확인
        const user = await User.findById(userId);
        res.locals.user = user;

        next(); // 이 미들웨어 다음으로 보낸다.
    } catch (error) {
        console.error(error);
        res.status(400).json({
            errorMessage: '로그인 후에 이용할 수 있는 기능입니다.',
        });
        return;
    }
};
