const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
    unique: true
  },
  syncTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: Number,
    required: true
  },
  content: {
    type: String,
  },
  comment: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model("Posts", postSchema);