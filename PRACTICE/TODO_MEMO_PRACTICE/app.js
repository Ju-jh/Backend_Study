const express = require("express");


const db = require("./models/index.js")
const todosRouter = require("./routes/todos.router.js");

const app = express();

app.use("/api", express.json(), todosRouter);
// express.static은 정적인 파일들을 연결해주는 미들웨어
// 특정 주소로 들어왔을 때 만약 ./assets라는 폴더안에 들어있다면 그 파일을 전송해주라 라는 뜻 
app.use(express.static("./assets"));

app.listen(8080, () => {
  console.log("서버가 켜졌어요!");
});