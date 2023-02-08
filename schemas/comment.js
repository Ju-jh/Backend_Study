const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

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

//commets 라는 컬렉션으로 mongoose 활용하여 저장.
module.exports = mongoose.model("comments",commentSchema);