import { Likes } from '../models/likes.js';
import { User } from '../models/auth.js';
import { Posts, LIKE_USER } from '../models/posts.js';

class LikeRepository {
    likeUpdate = async (postId, userId) => {
        return await Likes.create({ postPostId: postId, userUserId: userId });
    };

    unlikeUpdate = async (postId, userId) => {
        return await Likes.destroy({
            where: { postPostId: postId, userUserId: userId },
        });
    };

    getById = async (postId) => {
        return Posts.findByPk(postId);
    };

    getByuserId = async (userId) => {
        return User.findByPk(userId);
    };

    findpostinlike = async (postId) => {
        return await Likes.findOne({ where: { postPostId: postId } });
    };

    finduserinlike = async (postId) => {
        return await Likes.findAll({ where: { postPostId: postId } });
    };

    getAll = async () => {
        return Posts.findAll({ ...LIKE_USER, group: 'postId' });
    };
}
export default LikeRepository;
