const jwt = require("jsonwebtoken")

const payloadData = {
    myPayloadData : 1234
}

// jwt 생성
const token = jwt.sign(payloadData, "mysecretKey");
console.log(token);

// jwt 안에 정상적으로 payload가 존재하는지 확인
const decodedValue = jwt.decode(token);
console.log("복호화한 token 입니다.", decodedValue);

// jwt를 만들었을 때, 사용한 비밀키가 일치하는지 검증
const decodedValueByVerfiy = jwt.verify(token, "mysecretKey")
console.log("decodedValueByVerfiy : ", decodedValueByVerfiy )

// jwt를 만들었을 때, 사용한 비밀키가 일치하는지 검증 하지만 에러 발생
const decodedValueByVerfiyToError = jwt.verify(token, "비밀키를 다르게 입력해봄")
console.log("decodedValueByVerfiyToError : ", decodedValueByVerfiyToError )