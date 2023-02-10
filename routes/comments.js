const express = require("express");
const router = express.Router(); // 익스프레스 라우터를 router로 쓰겠다.
const Comments = require("../schemas/comment.js"); // [Comments]schema = 최상위 폴더로 나가서 schemas 폴더로 들어가서 comments.js 파일을 요청 

// 특정 게시글 댓글 조회 API (동작)=====================================================>
router.get("/comments/:upperPost", async(req,res)=> { //
    const { upperPost } = req.params; // [{ upperPost }]상수 = :upperPost 값을 요청
    const commentPick = await Comments.find({ upperPost }); // [commenPick]상수 = 동기로 실행(데이터를 DB에서 가져오니까) [Comments]schema 에서 { upperPost }를 찾은것.
    const result = commentPick.map(pickone => { // [result]상수 = [commentPick]을 map()메서드로 배열을 만들어 pickone에 넣어주고 return해준다.
        return {
            author : pickone.author, //pickone의 author 값을 author에 return
            password : pickone.password, //pickone의 password 값을 password에 return
            syncTime : pickone.syncTime, //pickone의 syncTime 값을 syncTime에 return
            comment : pickone.comment, //pickone의 comment 값을 comment에 return
            upperPost : pickone.upperPost //pickone의 upperPost값을 uppperPost에 return
        }
    });
    
    res.status(201).json({"data":result}); // response 201 성공 json 형태로 "data"에 result를 출력
});

// 댓글 작성 API (동작)=====================================================>
router.post("/comments/:_id", async(req,res,next)=> { //

    const { _id } = req.params; // [{ _id }] = :_id 값을 요청
    const { syncTime, author, password, comment } = req.body; //[{  syncTime, author, password, comment  }] = 해당 body 데이터를 요청

    try {   // try catch 문 
        if (comment.length == 0) { // if문으로 comment.length === 0이면
            throw new Error("댓글을 입력해주세요.") // Error "댓글을 입력해주세요." 출력
        }
        Comments.create({ // 위의 if문을 통과했으면 Comments에 생성 ({ ... })
            author : author, // author : req.body에 있던 author 값
            password : password, // password : req.body에 있던 password 값
            syncTime : syncTime, // syncTime : req.body에 있던 syncTime 값
            comment : comment, // comment : req.body에 있던 comment 값
            upperPost : _id // upperPost : req.params에 있던 _id 값
        })
        res.status(201).json({ message : "댓글을 생성하였습니다." }); // response 201 성공 json 형태로 출력 message : "댓글을 생성하였습니다."
    } catch (error) { // try문에서 오류가 나면 catch문으로 온다.
        next (error);  // error 출력
    }
     /*원래 사용하던 방식
     const newPost = {
         _id,
         syncTime,
         author,
         password,
         comment
     };
    
     await Comments.create(newPost);
     */
    });
    
// 특정 게시글에 있는 특정 댓글 수정 API (동작)=====================================================>
router.put("/comments/:upperPost/:_id", async (req,res,next)=> { // 
    const { _id } = req.params; // [{ _id }]상수 = :_id 를 파라미터로 요청
    const { author, password, comment } = req.body; // [{ author, password, comment }]상수 = body로 요청

    try { //try catch 문
        const existComment = await Comments.findOne({ _id }); // [existComment]상수 = 동기로 실행(데이터를 DB에서 가져오니까) [Comments]Schema 에서 { _id } 를 하나만 찾으시오.
        
        if (comment.length == 0) { // req.body에 있던 comment의 길이가 0이면 실행
            throw new Error("댓글 내용을 입력해주세요.") // Error "댓글 내용을 입력해주세요." 출력
        }

        if (!existComment) { // comment.length === 0 이 아니고 [existComment]상수가 없다면 실행
            throw new Error("유효하지 않은 _id 입니다.") // Error "유효하지 않은 _id 입니다." 출력
        };

        if (password !== existComment.password){ // passord 가 [existComment]상수의 password 와 다를때 실행
            throw new Error("비밀번호가 틀립니다.") // Error "비밀번호가 틀립니다." 출력
        };

        await Comments.updateOne( // 동기로 실행(데이터를 DB에서 가져오니까) [Comments]Schema에 업데이트 하나만 실행
            { _id }, // { _id }인 애만 찾아서
            {$set : { author, password ,comment }} // author, password, comment 데이터 변경
        );
        res.status(201).json({message: "댓글을 수정 하였습니다."}); // response 201 성공 json 형식으로 {message: "댓글을 수정 하였습니다."} 출력
    } catch (error) { // try문에서 오류가 나면 실행
        next (error); // error
    }
});

// 특정 게시글의 특정 댓글 삭제 API (동작)=====================================================>
router.delete("/comments/:upperPost/:_id", async (req,res,next)=> { //
    const { _id } = req.params; // [{ _id }]상수 = 파라미터로 요청한 _id 값
    const { password } = req.body; // [{ password }]상수 = body로 요청

    try { // try catch 문
        const existComment = await Comments.findOne({ _id }); // [existComment]상수 = 동기로 실행(데이터를 DB에서 가져오니까) [Comments]Schema 에서 하나만 찾아라 { _id }인 값을

        if (!existComment) { // [existComment]상수가 존재하지 않는다면 실행
            throw new Error("유효하지 않은 _id 입니다.") // Error "유효하지 않은 _id 입니다." 출력
        };

        if (password !== existComment.password) { // body에 있던 password가 [existComment]상수의 password와 다를 때 실행
            throw new Error("비밀번호가 틀립니다.") // Error "비밀번호가 틀립니다." 출력
        };

        await Comments.deleteOne({ _id }); // 동기로 실행(데이터를 DB에서 가져오니까) [Comments]Schema 에서 하나만 삭제 { _id }인 값을
        res.status(201).json({ message : "댓글을 삭제 하였습니다." }) // response 201 성공 코드 json 형태로 { message : "댓글을 삭제 하였습니다." } 출력

    } catch (error) { // try 문에서 오류 발생 시 catch문 실행
        next (error); // error 출력
    };
});

//=====================================================>

module.exports = router; // 라우터를 모듈로 추출
