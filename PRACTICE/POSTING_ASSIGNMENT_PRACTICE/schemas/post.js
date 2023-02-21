const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postId: {
    type: String,
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
    unique: false
  },
  password: {
    type: Number,
    required: true
  },
  content: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", postSchema);