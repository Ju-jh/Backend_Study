const express = require("express")
const router = express.Router();

const Posts = require("../schemas/post.js");

//전체 게시글 조회 API (동작)
router.get("/posts", async(req,res)=> {
    const posts = await Posts.find({})

    const result = posts.map(post => {
        return {
            syncTime : post.syncTime,
            name : post.name,
            title : post.title,
            content : post.content
        }
    });

    let rows = result.sort().reverse();

    res.status(200).json({"data":rows});
});

// 특정 게시글 조회 API (동작)
router.get("/posts/:_id", async(req,res)=> {
    const { _id } = req.params;
    const post = await Posts.find({ _id });
    const result = post.map(post=> {
        return {
            _id : post._id,
            syncTime : post.syncTime,
            name : post.name,
            title : post.title,
            content : post.content
        }
    });
    
    res.status(200).json({"data":result});
});

// 게시글 작성 API (동작)
router.post("/posts", async(req,res)=> {
    const {syncTime, name, password, title, content} = req.body;

    const newPost = {
        syncTime,
        name,
        password,
        title,
        content
    };
    
    await Posts.create(newPost);

    res.json({ message : "게시글을 생성하였습니다." });
});

// 게시글 수정 API (동작)
router.put("/posts/:_id", async (req,res,next)=> {
    const { _id } = req.params;
    const {name ,password ,title ,content} = req.body;

    try {
        const existPost = await Posts.findOne({ _id });

        if (!existPost) {
            throw new Error("유효하지 않은 post ID")
        };

        if (password !== existPost.password){
            throw new Error("비밀번호가 틀립니다.")
        };

        await Posts.updateOne(
            { _id },
            {$set : {name, password, title, content}}
        );
        res.status(200).json({message: "게시글을 수정 하였습니다."});
    } catch (error) {
        next (error);
    }
});

// 게시글 삭제 API (동작)
router.delete("/posts/:_id", async (req,res,next)=> {
    const { _id } = req.params;
    const { password } = req.body;

    try {
        const existPost = await Posts.findOne({ _id });

        if (!existPost) {
            throw new Error("유효하지 않은 _id 입니다.")
        };

        if (password !== existPost.password) {
            throw new Error("비밀번호가 틀립니다.")
        };

        await Posts.deleteOne({ _id });
        res.status(200).json({ message : "게시글을 삭제 하였습니다." })

    } catch (error) {
        next (error);
    };
});


// 라우터를 밖으로 추출
module.exports = router;
