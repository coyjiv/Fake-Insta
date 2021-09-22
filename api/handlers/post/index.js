const express = require("express");
const {
  getAllPosts,
  getPostById,
  getCommentsOnPost,
  getLastCommentOnPost,
  toggleLikeOnPost,
  writeCommentOnPost,
  createPost,
} = require("./post.handler");
const router = express.Router();

router.get("/", getAllPosts);
router.post("/create", createPost);
router.get("/:id", (req, res) => {
  if (req.params.id === "create") {
    res.status(400).send("This is a POST action.");
  }
});
router.get("/:postId", getPostById);
router.get("/:postId/comments", getCommentsOnPost);
router.get("/:postId/lastcomment", getLastCommentOnPost);
router.get("/:postId/like", toggleLikeOnPost);
router.post("/:postId/comment", writeCommentOnPost);

module.exports = router;
