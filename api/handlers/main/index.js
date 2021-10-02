const express = require("express");
const { getRecentPosts } = require("./recent.handler");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./docc/index.html"));
});
router.post("/recent", getRecentPosts);

module.exports = router;
