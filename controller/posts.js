import PostService from '../services/posts.js';

class PostController {
    postService = new PostService();

    createPost = async (req, res) => {
        const { title, content } = req.body;
        await this.postService.createPostService(req, res, title, content);
    };

    getAllPost = async (req, res) => {
        await this.postService.getAllPostService(res);
    };

    getAllByIdPost = async (req, res) => {
        const { postId } = req.params;
        await this.postService.getDetailPostService(res, postId);
    };

    updatePost = async (req, res) => {
        const { postId } = req.params;
        const { title, content } = req.body;
        console.log('## controller req', req);
        await this.postService.updatePostService(
            req,
            res,
            title,
            content,
            postId
        );
    };

    deletePost = async (req, res) => {
        const { postId } = req.params;
        await this.postService.deletePostService(req, res, postId);
    };
}

export default PostController;
