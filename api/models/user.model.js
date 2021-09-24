const mongoose = require("mongoose");

const model = mongoose.Schema({
  image: String,
  username: String,
  description: String,
  posts: Array,
  subscribed: Array,
  subscribers: Array,
});

module.exports = mongoose.model("User", model);
