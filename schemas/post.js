const mongoose = require("mongoose"); // [mongoose] = npm mongoose를 요청 --> [mongoose] 는 mongoose module

const postSchema = new mongoose.Schema({ // [mongoose]module의 Schema(설정값)인 ({...schema})를 postSchema로 생성자함수로 생성 

    syncTime: {
        type: Date,
        default: Date.now,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("posts",postSchema); // module.exports = Posts 라는 컬렉션에 생성자함수로 생성된 postSchema 를 넣는다..? ?????????