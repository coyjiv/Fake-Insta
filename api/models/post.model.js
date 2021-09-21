const mongoose = require("mongoose");

const model = mongoose.Schema({
  image: String,
  author: String,
  description: String,
  likeAmount: Number,
  commentAmount: Number,
  isLikedByGuest: Boolean,
  comments: Array,
});

module.exports = mongoose.model("Post", model);
