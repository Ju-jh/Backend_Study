// const express = require("express");
// const router = express.Router();
// const Comments = require("../schemas/comment.js");


// // (postId)특정 댓글 조회 API
// router.get("/posts/:postId", async (req, res) => {
//     const { postId } = req.params;
//     const post = await Posts.find({ postId });
//     const result = post.map(post => {
//       return {
//         postId: post.postId,
//         syncTime: post.syncTime,
//         name: post.name,
//         title: post.title,
//         content: post.content
//     };
//   });
//     res.status(200).json({ "data": result });
// });

// // 댓글 작성 API
// router.post("/posts/comment", async (req, res) => {
//     const { postId, syncTime, comment } = req.body;
  
//     const newComment = {
//         postId,
//         syncTime,
//         comment
//     };
//     await Posts.create(newComment);

//     res.json({ message: "댓글을 작성하였습니다."});
// });

// // 댓글 수정 API
// router.put("/posts/:postId", async (req,res)=>{
//     const {postId} = req.params;
//     const {password, title, content} = req.body;

//     try {
//         const existPost = await Posts.findOne({postId});

//         if (!existPost) {
//             throw new Error("유효하지 않은 post ID")
//         };
    
//         if (password !== existPost.password){
//             throw new Error("비밀번호가 틀립니다.")
//         };
        
//         await Posts.updateOne(
//             {postId},
//             {$set : {title, content}}
//         );
//         res.status(200).json({message: "게시글을 수정하였습니다."});

//     } catch (error) {
//         next(error);
//     }
// });

// // 댓글 삭제 API
// router.delete("/posts/:postId", async (req, res, next) => {
//     const { postId } = req.params;
    
//     try {
//       const existPost = await Posts.findOne({ postId });

//       if (!existPost) {
//         throw new Error("유효하지 않은 post Id 입니다.")
//       };
  
//       await Posts.deleteOne({ postId });
//       res.json({ message: "게시글을 삭제하였습니다."});
    
//     } catch(error) {
//       next(error);
//     }
//   });


// // 라우터를 밖으로 추출
// module.exports = router;