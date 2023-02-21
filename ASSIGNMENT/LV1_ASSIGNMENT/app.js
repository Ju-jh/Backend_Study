// app.js 는 default 로 express 서버의 가장 루트(최상단) 폴더, 중심이 됨. 이 파일 없으면 에러남

// 어플리케이션 ===============================================================================>

const express = require('express'); // [express] = npm express를 요청 === express module을 요청
const app = express(); // [app] = express를 실행 // 여기서 app을 어플리케이션이라고 함 --> app은 npm express를 실행

//------------

const port = 3000; // port = 3000 --> 포트는 3000

// ===============================================================================>

const postsRouter = require('./routes/posts.js'); // [postsRouter] = 최상위 폴더에 있는 routes폴더 안에 posts.js 파일을 요청
const commentsRouter = require('./routes/comments.js'); // [commentsRouter] = 최상위 폴더에 있는 routes폴더 안에 comments.js 파일을 요청

const connect = require("./schemas"); // [connect] = 최상위 폴더에 있는 schemas 폴더를 요청
connect(); // connect를 실행

// 어플리케이션에 미들웨어 추가===============================================================================>
// 미들웨어 추가시엔 use(middleware)를 사용
app.use(express.json()); // express.json() 미들웨어 추가
app.use("/api", [postsRouter, commentsRouter]); // ('/api' 경로에 postsRouter, commentsRouter 두개의 라우터 연결하는) 미들웨어 추가

//------------

app.get('/', (req,res) =>{ // ('/' 경로에 'Hello World!' send하는 response)응답
    res.send('Hello World!');
})

// 어플리케이션을 ===============================================================================>

app.listen(port, () => { // app(express()).listen (포트 , ()) -> 3000번 포트로 출력?
    console.log(port, '포트로 서버가 열렸어요!'); // console.log 출력 --> ( 3000 "포트로 서버가 열렸어요!" )

});
/*
app.listen = function() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
}; 
*/