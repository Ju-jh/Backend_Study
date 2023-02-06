// npm i mongoose
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  postdate: {
    type: Date,
    required: true
  },
  password: {
    type: Number,
    required: true
  },
  comments: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Comments", commentSchema);