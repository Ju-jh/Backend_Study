import LikeService from '../services/likes.js';

class LikeController {
    likeService = new LikeService();

    getAllLike = async (req, res) => {
        await this.likeService.getAllLikeService(res);
    };

    // getAllByIdLike = async (req, res) => {
    //     const { postId } = req.params;
    //     await this.commentSelvice.getDetailCommentService(res, postId);
    // };

    updateLike = async (req, res) => {
        const { postId } = req.params;
        await this.likeService.updateLikeService(req, res, postId);
    };
}

export default LikeController;
