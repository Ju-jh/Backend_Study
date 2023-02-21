

const express = require("express") // [express] = npm express 요청 --> express module
const router = express.Router(); // [router]상수 =  [express]를 Router로 쓰겠다.
const Posts = require("../schemas/post.js"); // [Posts]상수 = 최상위 폴더로 나가서 schemas 폴더내의 post.js 파일을 요청


// =====================================================>

/* 전체 게시글 조회 API (동작) */
router.get("/posts", async(req,res)=> { // 
    const posts = await Posts.find({}) // [posts]상수 = 동기로 실행(데이터를 DB에서 가져오니까) [Posts]Schema 에서 {}-->전체(?)를 찾은 값(?)

    const result = posts.map(post => { // [result]상수 = [posts]를 map()메서드 함수로 실행한것을 post에 입력
        return {
            syncTime : post.syncTime, // syncTime : [posts]의 syncTime 값
            name : post.name, // name : [posts]의 name 값
            title : post.title, // title : [posts]의 title 값
            content : post.content // content : [posts]의 content 값
        }
    });

    let rows = result.sort().reverse(); // [rows]변수 = [result]상수를 sort()하고 reverse()

    res.status(200).json({"data":rows}); // response 200 성공 json 형태로 { "data" : [rows] } 로 출력 === { "키" : "값" }
});

// =====================================================>

/* 특정 게시글 조회 API (동작) */ 
router.get("/posts/:_id", async(req,res)=> {
    const { _id } = req.params; // [{ _id }]상수 = 파라미터로 :_id 값 요청 
    const post = await Posts.find({ _id }); // [post]상수 = 동기로 실행(데이터를 DB에서 가져오니까) [Posts]Schema 에서 { _id }를 찾은 값
    const result = post.map(post=> { // [result]상수 = [post]를 map()메서드 함수로 실행한것을 post에 입력
        return {
            _id : post._id, // _id : [post]의 _id 값
            syncTime : post.syncTime, // syncTime : [post]의 syncTime 값
            name : post.name, // name : [post]의 name 값
            title : post.title, // title : [post]의 title 값
            content : post.content // content : [post]의 content 값
        }
    });
    
    res.status(200).json({"data":result}); // response 200 성공 json 형태로 { "data" : [result] } 로 출력 === { "키" : "값" }
});

// =====================================================>

/* 게시글 작성 API (동작) */ 
router.post("/posts", async(req,res)=> {
    const {syncTime, name, password, title, content} = req.body; // [ {syncTime, name, password, title, content} ]상수 = body로 요청

    const newPost = { // [newPost]상수 = { syncTime, name, password, title, content }
        syncTime,
        name,
        password,
        title,
        content
    };
    
    await Posts.create(newPost); // 동기로 실행(데이터를 DB에서 가져오니까) [Posts]Schema 에 create생성 ([newPost])

    res.json({ message : "게시글을 생성하였습니다." }); // response json 형태로 { message : "게시글을 생성하였습니다." } 출력
});

// =====================================================>

/* 게시글 수정 API (동작) */
router.put("/posts/:_id", async (req,res,next)=> { 
    const { _id } = req.params; // [{ _id }]상수 = 파라미터로 :_id 값을 요청
    const {name ,password ,title ,content} = req.body; // [{name ,password ,title ,content}]상수 = 해당 데이터들을 body로 요청

    try { //try catch문
        const existPost = await Posts.findOne({ _id }); // [existPost]상수 = 동기로 실행(데이터를 DB에서 가져오니까) [Posts]Schema 하나만 찾아 { _id }값

        if (!existPost) { // [existPost]가 존재하지 않는다면 실행
            throw new Error("유효하지 않은 post ID") // Error "유효하지 않은 post ID" 출력
        };

        if (password !== existPost.password){ // body로 가져온 password 가 [existPost]의 password 값과 다를 때 실행
            throw new Error("비밀번호가 틀립니다.") // Error "비밀번호가 틀립니다." 출력
        };

        await Posts.updateOne( // 동기로 실행(데이터를 DB에서 가져오니까) [Posts]Schema에 하나만 업데이트 
            { _id }, // { _id } 가 맞다면
            {$set : {name, password, title, content}} // {name, password, title, content}를 변경
        );
        res.status(200).json({message: "게시글을 수정 하였습니다."}); // response 200 성공 json 형태로 {message: "게시글을 수정 하였습니다."} 출력
    } catch (error) { // catch문
        next (error); // error
    }
});

// =====================================================>

// 게시글 삭제 API (동작)
router.delete("/posts/:_id", async (req,res,next)=> {
    const { _id } = req.params; // [{ _id }]상수 = 파라미터로 가져온 :_id 갑
    const { password } = req.body; // [{password}]상수 = body로 가져온 값

    try { // try catch 문
        const existPost = await Posts.findOne({ _id }); // [existPost]상수 = 동기로 실행(데이터를 DB에서 가져오니까) [Posts]Schema 에서 { _id } 하나만 찾은 값

        if (!existPost) { // [existPost]가 존재하지 않으면 실행
            throw new Error("유효하지 않은 _id 입니다.") // Error "유효하지 않은 _id 입니다." 출력
        };

        if (password !== existPost.password) { // body에서 가져온 password가 [existPost]의 password와 다를 때 실행
            throw new Error("비밀번호가 틀립니다.") // Error "비밀번호가 틀립니다." 출력
        };

        await Posts.deleteOne({ _id }); // 동기로 실행(데이터를 DB에서 가져오니까) [Posts]Schema 에서 { _id }값을 가진 하나만 삭제
        res.status(200).json({ message : "게시글을 삭제 하였습니다." }) // response 200 성공 json 형태로 { message : "게시글을 삭제 하였습니다." } 출력

    } catch (error) { // catch 문 
        next (error); // error
    };
});

// =====================================================>

module.exports = router; // 라우터를 모듈로 추출

