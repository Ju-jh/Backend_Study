// express 서버의 가장 루트(최상단) 폴더, 중심이 됨. 이 파일 없으면 에러남

const express = require('express');
const app = express();
const port = 3000;

<<<<<<< HEAD:main.js

const connect = require("./schemas");
connect();

app.get('/', (req,res)=>{
    res.send('GET')
});
=======
const postsRouter = require('./routes/posts.js');
// const commentsRouter = require('./routes/comments.js');
// const indexRouter = require('./routes/index.js');
const connect = require("./schemas");
connect();
>>>>>>> 1538ec6041ff66cef7255b54742a315b9865edd5:app.js

app.use(express.json());
app.use("/api", [postsRouter]);

app.get('/', (req,res) =>{
    res.send('Hello World!');
})

<<<<<<< HEAD:main.js
app.put('/', (req,res)=>{
    res.send('PUT')
})

app.delete('/', (req,res)=>{
    res.send('DELETE')
})

app.listen(port, ()=>{
    console.log('Example app listening on port', port)
=======
app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
>>>>>>> 1538ec6041ff66cef7255b54742a315b9865edd5:app.js
});