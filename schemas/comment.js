const { ObjectID } = require("json"); // [{objectID}] = json module을 요청 --> json module
const mongoose = require("mongoose"); // [mongoose] = npm mongoose 를 요청 --> mongoose module

const commentSchema = new mongoose.Schema({ // [mongoose]module의 Schema(설정값)인 ({...schema})를 commentSchema로 생성자함수로 생성 

    syncTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    upperPost: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model("comments",commentSchema); // module.exports = comments 라는 컬렉션에 생성자함수로 생성된 commentSchema 를 넣는다..? ?????????