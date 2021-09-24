const mongoose = require("mongoose");

const model = mongoose.Schema({
  image: String,
  author: String,
  description: String,
  likes: Array,
  comments: Array,
});

module.exports = mongoose.model("Post", model);
