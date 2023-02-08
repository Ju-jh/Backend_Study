// 데이터베이스의 기본이 되는 파일 (의례적으로 index.js 이름을 기본으로 사용)

const mongoose = require("mongoose");

import dotenv from "dotenv";
dotenv.config();

//해당 코드는 6줄 정도의 오류문을 빼주는 역할을 한다.
mongoose.set('strictQuery',true)


const connect = () => {
    process.env,Mongo_URL,
  mongoose
    .connect("mongodb://127.0.0.1:27017/node_express_study")
    .catch(err => console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;