const express = require("express");
const { getRecentPosts } = require("./recent.handler");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./docc/index.html"));
});
router.get("/recent", getRecentPosts);

module.exports = router;
