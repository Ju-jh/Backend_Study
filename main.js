// express 서버의 가장 루트(최상단) 폴더, 중심이 됨. 이 파일 없으면 에러남

const express = require('express')
const app = express()
const port = 3000


const connect = require("./schemas");
connect();

app.get('/', (req,res)=>{
    res.send('GET')
});

app.post('/', (req,res)=>{
    res.send('POST')
})

app.put('/', (req,res)=>{
    res.send('PUT')
})

app.delete('/', (req,res)=>{
    res.send('DELETE')
})

app.listen(port, ()=>{
    console.log('Example app listening on port', port)
});