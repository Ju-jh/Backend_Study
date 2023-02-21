const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  commentId: {
    type: String,
    required: true,
    unique: true
  },
  syncTime: {
    type: Date,
    default: Date.now,
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
  comment: {
    type: String,
    required: false
  }

});

module.exports = mongoose.model("comments", commentSchema);