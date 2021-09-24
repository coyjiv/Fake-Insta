const mongoose = require("mongoose");

const model = mongoose.Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model("Password", model);
