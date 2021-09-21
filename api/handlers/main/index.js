const express = require("express");
const { getRecentPosts } = require("./recent.handler");
const router = express.Router();

router.get("/recent", getRecentPosts);

module.exports = router;
