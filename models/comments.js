import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import { User } from './auth.js';
const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;

export const Comments = sequelize.define(
    'comments',
    {
        commentId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    { timestamps: true }
);
Comments.belongsTo(User);

export const INCLUDE_USER = {
    attributes: [
        'commentId',
        [Sequelize.col('User.userId'), 'userId'],
        'comment',
        'createdAt',
        'updatedAt',
    ],
    include: {
        model: User,
        attributes: [],
    },
};

export const DETAIL_USER = {
    attributes: [
        'commentId',
        [Sequelize.col('User.userId'), 'userId'],
        'comment',
        'createdAt',
        'updatedAt',
    ],
    include: {
        model: User,
        attributes: [],
    },
};

export const ORDER_DESC = {
    order: [['createdAt', 'DESC']],
};

// export async function getAll() {
//     return Comments.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
// }
// export async function findByUsername(nickname) {
//     return User.findOne({ where: { nickname: nickname } });
// }

// export async function getById(postId) {
//     return Posts.findOne({
//         where: { postId },
//         ...DETAIL_USER,
//     });
// }

// export async function update(commentId, comment) {
//     return Comments.findByPk(commentId, comment) //
//         .then((comment) => {
//             comment.comment = comment;
//             return comment.save();
//         });
// }

// export async function remove(postId) {
//     return Posts.findByPk(postId) //
//         .then((post) => {
//             post.destroy();
//         });
// }
