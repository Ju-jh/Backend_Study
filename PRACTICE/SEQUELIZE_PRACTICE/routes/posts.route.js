const express = require('express');
const { Op } = require('sequelize');
const { Posts } = require('../models');
const router = express.Router();

router.post('/posts', async (req, res) => {
    const { title, content, password } = req.body;
    const post = await Posts.create({ title, content, password });

    res.status(201).json({
        data: post,
    });
});

// 게시글 목록 조회 API
router.get('/posts', async (req, res) => {
    const posts = await Posts.findAll({
        // 게시글 내용은 제외하고, 비밀번호 제외
        attributes: ['postId', 'title', 'createdAt', 'updatedAt'],
    });

    res.status(200).json({ data: posts });
});

// 게시글 상세 조회 API
router.get('/posts/:postId', async (req, res) => {
    const { postId } = req.params;
    const post = await Posts.findOne({
        // Sequelize의 조회 메서드에 대해서 더 알고싶다면, https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
        where: { postId: postId },
        attributes: ['postId', 'title', 'content', 'createdAt', 'updatedAt'],
    });
    // postId값이, 현재 전달받은 postId 변수 값과 일치하는 데이터를 찾아라.
    res.status(200).json({ data: post });
});

// 게시글 수정 API
router.put('/posts/:postId', async (req, res) => {
    const { postId } = req.params;
    const { title, content, password } = req.body;

    // 검증
    const post = await Posts.findOne({
        where: { postId: postId },
    });

    // if에서 게시글 존재 유무 검증 --> else if에서 비밀번호 일치 여부 검증
    if (!post) {
        return res.status(404).json({
            message: '게시글이 존재하지 않습니다.',
        });
    } else if (post.password !== password) {
        return res.status(401).json({
            message:
                '게시글의 비밀번호와, 전달받은 비밀번호가 일치하지 않습니다.',
        });
    }

    // 게시글을 수정
    await Posts.update(
        { title, content }, // 수정할 컬럼 및 데이터
        {
            where: {
                // SQL에서는 특정한 데이터를 검출하기 위해 where 절에서 OR(||),AND(&&),LIKE,정규표현식 등 다양한 연산자를 사용할 수 있다.
                // Sequelize.Op에 대해서 더 자세히 알고싶다면, https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
                [Op.and]: [{ postId }, { password }], //sequalize 문법중하나 Op.and --> 게시글의 비밀번호와, postId가 일치할 때, 수정한다.
            },
        } // 어떤 데이터를 수정할 지 작성
    );

    return res.status(200).json({ message: '게시글이 수정되었습니다.' });
});

// 게시글 삭제 API
router.delete('/posts/:postId', async (req, res) => {
    const { postId } = req.params;
    const { password } = req.body;

    // 검증
    const post = await Posts.findOne({
        where: { postId: postId },
    });
    // if에서 게시글 존재 유무 검증 --> else if에서 비밀번호 일치 여부 검증
    if (!post) {
        return res.status(404).json({
            message: '게시글이 존재하지 않습니다.',
        });
    } else if (post.password !== password) {
        return res.status(401).json({
            message:
                '게시글의 비밀번호와, 전달받은 비밀번호가 일치하지 않습니다.',
        });
    }

    // 게시글을 삭제
    await Posts.destroy(
        {
            where: {
                // SQL에서는 특정한 데이터를 검출하기 위해 where 절에서 OR(||),AND(&&),LIKE,정규표현식 등 다양한 연산자를 사용할 수 있다.
                // Sequelize.Op에 대해서 더 자세히 알고싶다면, https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
                [Op.and]: [{ postId }, { password }], //sequalize 문법중하나 Op.and --> 게시글의 비밀번호와, postId가 일치할 때, 삭제한다.
            },
        } // 어떤 데이터를 수정할 지 작성
    );

    return res.status(200).json({ message: '게시글이 삭제되었습니다.' });
});

module.exports = router;
