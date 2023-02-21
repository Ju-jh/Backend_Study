// 데이터베이스의 기본이 되는 파일 (의례적으로 index.js 이름을 기본으로 사용)

// ===============================================================================>

const mongoose = require("mongoose"); // [mongoose]module = mongoose module을 요청 
mongoose.set('strictQuery',true) //해당 코드는 6줄 정도의 아래 몽구스 오류문을 빼주는 역할을 한다.

//-----------------------------------

require('dotenv').config(); // npm dotenv == dotenv module을 config()한다. 
/*dotenv.config()는 현재 디렉토리의 .env파일을 자동으로 인식하여 환경변수를 세팅한다.
dotenv.config(경로)는 원하는 .env파일의 위치를 직접 지정하여 세팅할 수 있다.*/

// ===============================================================================>

const connect = () => {  // [connect] 라는 콜백함수로 mongoose에   --> 성공? .connect(process.env.MONGO_URI) 
  mongoose               //                                      --> 실패> .catch(err => console.log(err)) // err 를 콘솔로그문에 넣고 출력
    .connect(process.env.MONGO_URI)
    .catch(err => console.log(err));
};

// ===============================================================================>

mongoose.connection.on("error", err => { // DB연결 error 일때 몽고디비 연결 에러라는 문자 console.log에 찍힘 // 
  console.error("몽고디비 연결 에러", err);
});

// ===============================================================================>

module.exports = connect; // connect 를 모듈로 추출


