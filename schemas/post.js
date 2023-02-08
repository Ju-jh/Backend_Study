const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

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
        // required: false 처리 해야할 것 같다.
    }

});

//posts 라는 컬렉션으로 mongoose 활용하여 저장.
module.exports = mongoose.model("posts",postSchema);