import { Likes } from '../models/likes.js';

import { Posts, LIKE_USER } from '../models/posts.js';

class LikeRepository {
    // getAll = async () => {
    //     return Likes.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
    // };

    // getById = async (commentId) => {
    //     return Likes.findOne({
    //         where: { commentId },
    //         ...DETAIL_USER,
    //     });
    // };

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

    findpostinlike = async (postId) => {
        return await Likes.findOne({ postPostId: postId });
    };

    getAll = async () => {
        return Posts.findAll({ ...LIKE_USER, group: 'postId' });
    };
}
export default LikeRepository;
