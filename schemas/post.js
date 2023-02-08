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
    }

});

module.exports = mongoose.model("posts",postSchema);