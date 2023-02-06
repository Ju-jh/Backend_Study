const express = require("express");
const router = express.Router();
const Posts = require("../schemas/post.js");


// 전체 게시글 조회 API
router.get("/posts", async (req, res) => {
    const posts = await Posts.find({})

    const result = posts.map(post => {
        return {
            syncTime : post.syncTime,
            name : post.name,
            title : post.title,
            content : post.content
        }
    });
    res.status(200).json({"data":result});
});

// (postId)특정 게시글 조회 API
router.get("/posts/:postId", async (req, res) => {
    const { postId } = req.params;
    const post = await Posts.find({ postId });
    const result = post.map(post => {
      return {
        postId: post.postId,
        syncTime: post.syncTime,
        name: post.name,
        title: post.title,
        content: post.content
    };
  });
    res.status(200).json({ "data": result });
});

// 게시글 작성 API
router.post("/posts", async (req, res) => {
    const { postId, syncTime, name, password, title, content } = req.body;
  
    const newPost = {
      postId,
      syncTime,
      name,
      password,
      title,
      content
    };
    await Posts.create(newPost);

    res.json({ message: "게시글을 생성하였습니다."});
});

// 게시글 수정 API
router.put("/posts/:postId", async (req,res)=>{
    const {postId} = req.params;
    const {password, title, content} = req.body;

    try {
        const existPost = await Posts.findOne({postId});

        if (!existPost) {
            throw new Error("유효하지 않은 post ID")
        };
    
        if (password !== existPost.password){
            throw new Error("비밀번호가 틀립니다.")
        };
        
        await Posts.updateOne(
            {postId},
            {$set : {title, content}}
        );
        res.status(200).json({message: "게시글을 수정하였습니다."});

    } catch (error) {
        next(error);
    }
});

// 게시글 삭제 API
router.delete("/posts/:postId", async (req, res, next) => {
    const { postId } = req.params;
    
    try {
      const existPost = await Posts.findOne({ postId });

      if (!existPost) {
        throw new Error("유효하지 않은 post Id 입니다.")
      };
  
      await Posts.deleteOne({ postId });
      res.json({ message: "게시글을 삭제하였습니다."});
    
    } catch(error) {
      next(error);
    }
  });


// 라우터를 밖으로 추출
module.exports = router;