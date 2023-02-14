import SQ from 'sequelize';
import { sequelize } from './database.js';
import { User } from './auth.js';
const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

//============================================================================================//

//post기본
const Posts = sequelize.define(
    'post',
    {
        postId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    { timestamps: true }
);
Posts.belongsTo(User);

//전체조회
const INCLUDE_USER = {
    attributes: [
        'postId',
        [Sequelize.col('User.userId'), 'userId'],
        [Sequelize.col('User.nickname'), 'nickname'],
        'title',
        'createdAt',
        'updatedAt',
    ],
    include: {
        model: User,
        attributes: [],
    },
};

//상세조회
const DETAIL_USER = {
    attributes: [
        'postId',
        [Sequelize.col('User.userId'), 'userId'],
        [Sequelize.col('User.nickname'), 'nickname'],
        'title',
        'content',
        'createdAt',
        'updatedAt',
    ],
    include: {
        model: User,
        attributes: [],
    },
};

//============================================================================================//

//정리
const ORDER_DESC = {
    order: [['createdAt', 'DESC']],
};

//============================================================================================//

//게시글 생성
export async function create(content, title, userId) {
    return Posts.create({ content, title, userUserId: userId }).then((data) =>
        Posts.findByPk(data.dataValues.postId)
    );
}

//게시글 찾기
export async function getAll() {
    return Posts.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

//닉네임 찾기
export async function findByUserName(nickname) {
    return User.findOne({ where: { nickname: nickname } });
}

//게시글 상세찾기
export async function getById(postId) {
    return Posts.findOne({
        where: { postId },
        ...DETAIL_USER,
    });
}

//게시글 수정
export async function update(postId, title, content) {
    return Posts.findByPk(postId, DETAIL_USER) //
        .then((post) => {
            (post.title = title), (post.content = content);
            return post.save();
        });
}

//게시글 삭제
export async function remove(postId) {
    return Posts.findByPk(postId) //
        .then((post) => {
            post.destroy();
        });
}
