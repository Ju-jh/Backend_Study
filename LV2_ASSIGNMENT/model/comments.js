import mongoose from 'mongoose';
import Inc from 'mongoose-sequence';
import { useVirtualId } from './database.js';
import * as User from './auth.js';

const { Schema } = mongoose;
const AutoIncrement = Inc(mongoose);

const commentSchema = new mongoose.Schema(
    {
        commentId: {
            type: Number,
            requierd: true,
        },
        comment: {
            type: String,
            requierd: true,
        },
        userId: { type: Schema.Types.Number, ref: 'userModel' },
        nickname: { type: Schema.Types.String, ref: 'userModel' },
    },
    { timestamps: true }
);

commentSchema.plugin(AutoIncrement, {
    id: 'commentId',
    inc_field: 'commentId',
});

useVirtualId(commentSchema);
const Comment = mongoose.model('commentModel', commentSchema);

export async function create(comment, userId, nickname) {
    return User.findById(userId).then(() =>
        new Comment({
            commentId: Comment.commentId,
            userId,
            nickname,
            comment,
        }).save()
    );
}

export async function getAll() {
    return Comment.find().sort({ createdAt: -1 });
}

export async function update(commentId, comment) {
    return Comment.updateOne(
        { commentId: commentId },
        { $set: { comment: comment } }
    );
}

export async function getById(commentId) {
    return Comment.find({ commentId });
}

export async function deleteId(commentId) {
    return Comment.deleteOne({ commentId: commentId });
}
