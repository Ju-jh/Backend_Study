import mongoose from 'mongoose';
import increment from 'mongoose-sequence';
import { useVirtualId } from './database.js';
import * as User from './auth.js';

const { Schema } = mongoose;
const AutoIncrement = increment(mongoose);

const postSchema = new mongoose.Schema(
    {
        postId: {
            type: Number,
            require: true,
        },
        title: {
            type: String,
            require: true,
        },
        content: {
            type: String,
            require: true,
        },
        userId: { type: Schema.Types.Number, ref: 'userModel' },
        nickname: { type: Schema.Types.String, ref: 'userModel' },
    },
    { timestamps: true }
);

postSchema.plugin(AutoIncrement, { id: 'postId', inc_field: 'postId' });

useVirtualId(postSchema);
const Post = mongoose.model('postModel', postSchema);

export async function create(title, content, userId, nickname) {
    return User.findById(userId).then(() =>
        new Post({
            postId: Post.postId,
            userId,
            nickname,
            title,
            content,
        }).save()
    );
}

export async function getAll() {
    return Post.find().sort({ createdAt: -1 });
}

export async function getById(postId) {
    return Post.find({ postId });
}

export async function update(postId, title, content) {
    return Post.updateOne(
        { postId: postId },
        { $set: { title: title, content: content } }
    );
}

export async function deleteId(postId) {
    return Post.deleteOne({ postId: postId });
}
