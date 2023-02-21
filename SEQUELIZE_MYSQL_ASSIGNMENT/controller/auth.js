import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import * as userRepository from '../model/auth.js';

//회원가입 API
export async function signup(req, res) {
    // reqest에서 전달받기
    const { nickname, password, confirm } = req.body;

    // 조건식
    const rex = /[a-z][A-Z][0-9]/gi;
    const nicknameCheck = rex.test(nickname);
    if (!nicknameCheck) {
        return res
            .status(412)
            .json({ errorMessage: '닉네임의 형식이 일치하지 않습니다.' });
    }

    // 닉네임 중복 확인 --> 닉네임 DB에서 가져와야지
    const found = await userRepository.findByUsername(nickname);
    if (found != null) {
        return res.status(412).json({ errorMessage: '중복된 닉네임입니다.' });
    }

    // 패스워드에 닉네임과 같은값 포함하는지 확인 검증
    if (password.search(nickname) > -1) {
        return res
            .status(412)
            .json({ errorMessage: '패스워드에 닉네임이 포함되어 있습니다.' });
    }

    // 패스워드 2중 확인 검증
    if (password !== confirm) {
        return res
            .status(412)
            .json({ errorMessage: '패스워드가 일치하지 않습니다.' });
    }

    // 생성
    await userRepository.createUser({
        nickname,
        password,
    });

    // 성공 메세지 res
    res.json({ message: '회원가입에 성공하셨습니다.' });
}

//로그인 API
export async function login(req, res) {
    // nicknam, password 가져오기
    console.log(req.body);
    const { nickname, password } = req.body;

    // 로그인 버튼을 누른 경우 닉네임이 데이터베이스에 등록됐는지 찾기
    const user = await userRepository.findByUsername(nickname);

    // 하나라도 맞지 않는 정보가 있다면 "닉네임 또는 패스워드를 확인해주세요."라는 에러 메세지를 **response**에 포함하기
    if (!user) {
        return res
            .status(412)
            .json({ errorMessage: '닉네임 또는 패스워드를 확인해주세요.' });
    }

    // 로그인 버튼을 누른 경우 비밀번호가 데이터베이스에 등록됐는지 찾기
    const isValidPassword = await user.password.includes(password);

    // 하나라도 맞지 않는 정보가 있다면 "닉네임 또는 패스워드를 확인해주세요."라는 에러 메세지를 **response**에 포함하기
    if (!isValidPassword) {
        return res
            .status(412)
            .json({ errorMessage: '닉네임 또는 패스워드를 확인해주세요.' });
    }

    //토큰처리
    const crtoken = createJwtToken(user.userId);
    const slicetoken1 = crtoken.slice(0, 10);
    const slicetoken2 = crtoken
        .slice(10, 20)
        .replace(/^[a-z0-9_]{4,20}$/gi, '**********');
    const token = slicetoken1 + slicetoken2;
    console.log('Authorization');
    res.cookie('Authorization', `Bearer ${crtoken}`);
    res.json({ token: token });
}

//token생성기
const secretKey = process.env.SECRETKEY;
function createJwtToken(userId) {
    return jwt.sign({ userId }, secretKey);
}
