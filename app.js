const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = 3002;
const SECRET_KEY = `HangHae99`;

app.use(cookieParser());

let tokenObject = {}; // Refresh Token을 저장할 Object

app.get('/set-token/:id', (req, res) => {
    const id = req.params.id;
    const accessToken = createAccessToken(id);
    const refreshToken = createRefreshToken();

    tokenObject[refreshToken] = id; // Refresh Token을 가지고 해당 유저의 정보를 서버에 저장합니다.
    res.cookie('accessToken', accessToken); // Access Token을 Cookie에 전달한다.
    res.cookie('refreshToken', refreshToken); // Refresh Token을 Cookie에 전달한다.

    return res
        .status(200)
        .send({ message: 'Token이 정상적으로 발급되었습니다.' });
});

// Access Token을 생성합니다.
function createAccessToken(id) {
    const accessToken = jwt.sign(
        { id: id }, // JWT 데이터
        SECRET_KEY, // 비밀키
        { expiresIn: '10s' }
    ); // Access Token이 10초 뒤에 만료되도록 설정합니다.

    return accessToken;
}

// Refresh Token을 생성합니다.
function createRefreshToken() {
    const refreshToken = jwt.sign(
        {}, // JWT 데이터
        SECRET_KEY, // 비밀키
        { expiresIn: '7d' }
    ); // Refresh Token이 7일 뒤에 만료되도록 설정합니다.

    return refreshToken;
}

app.get('/get-token', (req, res) => {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken)
        return res
            .status(400)
            .json({ message: 'Refresh Token이 존재하지 않습니다.' });
    if (!accessToken)
        return res
            .status(400)
            .json({ message: 'Access Token이 존재하지 않습니다.' });

    const isAccessTokenValidate = validateAccessToken(accessToken);
    const isRefreshTokenValidate = validateRefreshToken(refreshToken);

    if (!isRefreshTokenValidate)
        return res
            .status(419)
            .json({ message: 'Refresh Token이 만료되었습니다.' });

    if (!isAccessTokenValidate) {
        const accessTokenId = tokenObject[refreshToken];
        if (!accessTokenId)
            return res.status(419).json({
                message: 'Refresh Token의 정보가 서버에 존재하지 않습니다.',
            });

        const newAccessToken = createAccessToken(accessTokenId);
        res.cookie('accessToken', newAccessToken);
        return res.json({ message: 'Access Token을 새롭게 발급하였습니다.' });
    }

    const { id } = getAccessTokenPayload(accessToken);
    return res.json({
        message: `${id}의 Payload를 가진 Token이 성공적으로 인증되었습니다.`,
    });
});

// Access Token을 검증합니다.
function validateAccessToken(accessToken) {
    try {
        jwt.verify(accessToken, SECRET_KEY); // JWT를 검증합니다.
        return true;
    } catch (error) {
        return false;
    }
}

// Refresh Token을 검증합니다.
function validateRefreshToken(refreshToken) {
    try {
        jwt.verify(refreshToken, SECRET_KEY); // JWT를 검증합니다.
        return true;
    } catch (error) {
        return false;
    }
}

// Access Token의 Payload를 가져옵니다.
function getAccessTokenPayload(accessToken) {
    try {
        const payload = jwt.verify(accessToken, SECRET_KEY); // JWT에서 Payload를 가져옵니다.
        return payload;
    } catch (error) {
        return null;
    }
}

app.get('/', (req, res) => {
    res.status(200).send('Hello Token!');
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});
