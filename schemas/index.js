// 데이터베이스의 기본이 되는 파일 (의례적으로 index.js 이름을 기본으로 사용)
const mongoose = require("mongoose");
require('dotenv').config();
//해당 코드는 6줄 정도의 오류문을 빼주는 역할을 한다.
mongoose.set('strictQuery',true)

const connect = () => {
  mongoose
    //postDB라는 DB에 저장
    .connect(process.env.MONGO_URI)
    .catch(err => console.log(err));
};

//DB연결 error 일때 몽고디비 연결 에러라는 문자 console.log에 찍힘
mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

// connect 를 모듈로 추출
module.exports = connect;

