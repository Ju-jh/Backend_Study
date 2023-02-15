import mongoose from 'mongoose';
import Inc from 'mongoose-sequence';
import { useVirtualId } from './database.js';

const AutoIncrement = Inc(mongoose);

const UserSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            require: true,
        },
        nickname: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    { timestamps: false }
);

UserSchema.plugin(AutoIncrement, { id: 'userId', inc_field: 'userId' });

useVirtualId(UserSchema);
const User = mongoose.model('userModel', UserSchema);

export async function createUser(user) {
    return new User(user).save().then((data) => data.id);
}

export async function findNickname(nickname) {
    return User.findOne({ nickname });
}
