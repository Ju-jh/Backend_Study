import mongoose from 'mongoose';
import dotenv from 'dotenv';
mongoose.set('strictQuery', false);

dotenv.config();

const { MONGO_URI } = process.env;

const database = () => {
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => console.log('몽고디비 연결 성공!'))
        .catch((e) => console.log(e));
};

export function useVirtualId(schema) {
    schema.virtual('id').get(function () {
        return this._id.toString();
    });
    schema.set('toJSON', { virtuals: true });
    schema.set('toOject', { virtuals: true });
}

export default database;
