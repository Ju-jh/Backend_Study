import CommentService from '../services/comments.js';

class CommentController {
    commentService = new CommentService();

    createComment = async (req, res) => {
        const { comment } = req.body;
        await this.commentService.createCommentService(req, res, comment);
    };

    getAllComment = async (req, res) => {
        await this.commentService.getAllCommentService(res);
    };

    // getAllByIdComment = async (req, res) => {
    //     const { postId } = req.params;
    //     await this.commentSelvice.getDetailCommentService(res, postId);
    // };

    updateComment = async (req, res) => {
        const { commentId } = req.params;
        const { comment } = req.body;
        await this.commentService.updateCommentService(
            req,
            res,
            commentId,
            comment
        );
    };

    deleteComment = async (req, res) => {
        const { commentId } = req.params;
        await this.commentService.deleteCommentService(req, res, commentId);
    };
}

export default CommentController;
