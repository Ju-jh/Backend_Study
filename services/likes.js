import LikeRepository from '../repositories/likes.js';
import jwt from 'jsonwebtoken';

class LikeService {
    likeRepository = new LikeRepository();

    getAllLikeService = async (res) => {
        const data = await this.likeRepository.getAll();
        return res.status(200).json({ post: [data] });
    };

    updateLikeService = async (req, res, postId) => {
        const token = req.cookies.Authorization;
        const splitedToken = token.split(' ')[1];
        const decodedToken = jwt.decode(splitedToken);
        const postfind = await this.likeRepository.getById(postId);
        if (!postfind) {
            return res
                .status(404)
                .json({ errorMessage: '게시글이 존재하지 않습니다.' });
        }
        // if (postfind.dataValues.userUserId != decodedToken.userId) {
        //     return res
        //         .status(403)
        //         .json({ errorMessage: '로그인이 필요한 기능입니다.' });
        // }
        const isLike = await this.likeRepository.findpostinlike(postId);
        const originlike = await this.likeRepository.getByuserId(
            decodedToken.userId
        );
        const findUserIdInLike = await this.likeRepository.finduserinlike(
            postId
        );
        console.log(findUserIdInLike);
        // 포스트에 라이크가 없으면
        if (!isLike) {
            await this.likeRepository.likeUpdate(postId, decodedToken.userId);

            return res
                .status(200)
                .json({ message: '게시글의 좋아요를 등록하였습니다.' });
        } else if (
            // 포스트에 라이크가 있으면서
            isLike &&
            // 기존의 좋아요 누른 아이디 == 지금 좋아요 누르는 아이디
            originlike.dataValues.userId == isLike.dataValues.userUserId
        ) {
            await this.likeRepository.unlikeUpdate(postId, decodedToken.userId);
            return res
                .status(200)
                .json({ message: '게시글의 좋아요를 취소하였습니다.' });
        }
        // 기존의 좋아요 누른 아이디 != 지금 좋아요 누르는 아이디 이면서
        // 게시글에 좋아요 누른 아이디가 있다
        if (true) {
            await this.likeRepository.likeUpdate(postId, decodedToken.userId);
            return res.status(200).json({
                message:
                    '이미 좋아요 되어있는 게시글에 다른아이디가 게시글의 좋아요를 등록하였습니다.',
            });
        } else {
            await this.likeRepository.unlikeUpdate(postId, decodedToken.userId);
            return res.status(200).json({
                message:
                    '이미 좋아요 되어있는 게시글에 다른아이디가 게시글의 좋아요를 취소하였습니다.',
            });
        }
    };
}

export default LikeService;
