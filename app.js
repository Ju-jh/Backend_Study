
const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require('./routes/posts.js');
// const commentsRouter = require('./routes/comments.js');
// const indexRouter = require('./routes/index.js');


const connect = require("./schemas");
connect();

app.use(express.json());
app.use("/api", [postsRouter]);

app.get('/', (req,res) =>{
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
  });