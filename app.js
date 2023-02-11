const jwt = require("jsonwebtoken")
const payloadData = {
    myPayloadData : 1234
}

// jwt 생성
const token = jwt.sign(payloadData, "mysecretKey");
console.log(token);

// jwt의 payload 데이터를 복호화
// jwt 안에 정상적으로 payload가 존재하는지 확인
const decodedValue = jwt.decode(token);
console.log("복호화한 token 입니다.", decodedValue);

// jwt를 만들었을 때, 사용한 비밀키가 일치하는지 검증
const decodedValueByVerfiy = jwt.verify(token, "mysecretKey")
console.log("decodedValueByVerfiy : ", decodedValueByVerfiy )

// jwt를 만들었을 때, 사용한 비밀키가 일치하는지 검증 하지만 에러 발생
const decodedValueByVerfiyToError = jwt.verify(token, "비밀키를 다르게 입력해봄")
console.log("decodedValueByVerfiyToError : ", decodedValueByVerfiyToError )


//=====================================================================================>

/*jwt를 적용하지 않은 로그인 API */
/*이렇게 사용하면 데이터를 쉽게 수정할 수 있다. */

const express = require('express');
const app = express();

app.post('/login', function (req, res, next) {
  const user = { // 사용자 정보
    userId: 203, // 사용자의 고유 아이디 (Primary key)
    email: "archepro84@gmail.com", // 사용자의 이메일
    name: "이용우", // 사용자의 이름
  }

  res.cookie('sparta', user);  // sparta 라는 이름을 가진 쿠키에 user 객체를 할당합니다.
  return res.status(200).end();
});

app.listen(5002, () => {
  console.log(5002, "번호로 서버가 켜졌어요!");
});

//=====================================================================================>

/*jwt를 적용한 로그인 API */
const express = require('express');
const JWT = require("jsonwebtoken");
const app = express();

app.post('/login', async (req, res) => {
  // 사용자 정보
  const user = {
    userId: 203,
    email: "archepro84@gmail.com",
    name: "이용우",
  }

  // 사용자 정보를 JWT로 생성
  const userJWT = await JWT.sign(user, // user 변수의 데이터를 payload에 할당
    "secretOrPrivateKey", // JWT의 비밀키를 secretOrPrivateKey라는 문자열로 할당
    { expiresIn: "1h" } // JWT의 인증 만료시간을 1시간으로 설정
  );

  // userJWT 변수를 sparta 라는 이름을 가진 쿠키에 Bearer 토큰 형식으로 할당
  res.cookie('sparta', `Bearer ${userJWT}`);
  return res.status(200).end();
});

app.listen(5002, () => {
  console.log(5002, "번호로 서버가 켜졌어요!");
});