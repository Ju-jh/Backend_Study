const express = require("express");
const router = express.Router(); // 익스프레스 라우터를 router로 쓰겠다.

const Comments = require("../schemas/comment.js");

// 특정 게시글 댓글 조회 API (동작)
router.get("/comments/:upperPost", async(req,res)=> {
    const { upperPost } = req.params;
        // const _id = req.params._id 와 같다.
    const commentPick = await Comments.find({ upperPost });
    const result = commentPick.map(commentPick=> {
    

        return {
            author : commentPick.author,
            password : commentPick.password,
            syncTime : commentPick.syncTime,
            comment : commentPick.comment,
            upperPost : commentPick.upperPost
        }
    });
    
    res.status(200).json({"data":result});
});

// 댓글 작성 API (동작)
router.post("/comments/:_id", async(req,res,next)=> {

    const { _id } = req.params;
    // const _id = req.params._id 와 같다.
    const { syncTime, author, password, comment } = req.body;
    
    try {
        if (comment.length == 0) {
            throw new Error("댓글을 입력해주세요.")
        }
        Comments.create({
            author : author,
            password : password,
            syncTime : syncTime,
            comment : comment,
            upperPost : _id
        })
        res.send({ message : "댓글을 생성하였습니다." });
    } catch (error) {
        next (error);
    }
    // //원래 사용하던 방식
    // const newPost = {
    //     _id,
    //     syncTime,
    //     author,
    //     password,
    //     comment
    // };
    
    // await Comments.create(newPost);
});

// 특정 게시글에 있는 특정 댓글 수정 API (동작)
router.put("/comments/:upperPost/:_id", async (req,res,next)=> {
    const { _id } = req.params;
    const { author, password, comment } = req.body;

    try {
        const existComment = await Comments.findOne({ _id });
        if (comment.length == 0) {
            throw new Error("댓글 내용을 입력해주세요.")
        }

        if (!existComment) {
            throw new Error("유효하지 않은 _id 입니다.")
        };

        if (password !== existComment.password){
            throw new Error("비밀번호가 틀립니다.")
        };

        await Comments.updateOne(
            { _id },
            {$set : { author, password ,comment }}
        );
        res.status(200).json({message: "댓글을 수정 하였습니다."});
    } catch (error) {
        next (error);
    }
});

// 특정 게시글의 특정 댓글 삭제 API (동작)
router.delete("/comments/:upperPost/:_id", async (req,res,next)=> {
    const { _id } = req.params;
    const { password } = req.body;

    try {
        const existComment = await Comments.findOne({ _id });

        if (!existComment) {
            throw new Error("유효하지 않은 _id 입니다.")
        };

        if (password !== existComment.password) {
            throw new Error("비밀번호가 틀립니다.")
        };

        await Comments.deleteOne({ _id });
        res.status(200).json({ message : "댓글을 삭제 하였습니다." })

    } catch (error) {
        next (error);
    };
});


// 라우터를 밖으로 추출
module.exports = router;
