const express = require("express");
const router = express.Router();

const Comments = require("../schemas/comment.js");
const Posts = require("../schemas/post.js");


// 댓글 조회 API
router.get("/comment/:postId", async (req, res) => {
  const { postId } = req.params;
  const comment = await Comments.find({postId});
  const result = comment.map(comment => {
    return {
      commentId: comment.commentId,
      syncTime: comment.syncTime,
      name: comment.name,
      commment: comment.comment
    };
  });
  res.status(200).json({ "data": result });
});



// 댓글 작성 API
router.post("/comments/:postId", async (req, res, next) => {
  const { postId } = req.params;
  const { commentId, syncTime, name, password, comment } = req.body;

  try {
    if (!comment.length) {
      throw new Error("댓글 내용을 입력해주세요.");
    }
    const existPost = await Posts.findOne({ postId });
    if (!existPost) throw new Error("유효하지 않은 post Id 입니다.");

    const newComment = { 
      commentId,
      syncTime,
      name,
      password,
      comment
      };
    await Comments.create(newComment);
    res.status(200).json({ "message": "댓글을 생성하였습니다." });
  
  } catch (error) {
    next(error);
  }
});



// 댓글 수정 API
router.put("/comments/:postId", async (req ,res ,next)=>{
  const { postId } = req.params;
  const { password, title, content } = req.body;

  try {
      const existPost = await Posts.findOne({postId});

      if (!existPost) {
          throw new Error("유효하지 않은 comment ID")
      };
  
      if (password !== existPost.password){
          throw new Error("비밀번호가 틀립니다.")
      };
      
      await Posts.updateOne(
          {postId},
          {$set : {title, content}}
      );
      res.status(200).json({message: "댓글을 수정하였습니다."});

  } catch (error) {
      next(error);
  }
});




// 댓글 삭제 API
router.delete("/comments/:postId", async (req, res, next) => {
  const { postId } = req.params;
  const { password } = req.body;

  
  try {
    const existPost = await Posts.findOne({ postId });

    if (!existPost) {
      throw new Error("유효하지 않은 comment Id")
    };

    if (password !== existPost.password){
      throw new Error("비밀번호가 틀립니다.")
    };

    await Posts.deleteOne({ postId });
    res.status(200).json({ message: "댓글을 삭제하였습니다."});
  
  } catch(error) {
    next(error);
  }
});




// 라우터를 밖으로 추출
module.exports = router;