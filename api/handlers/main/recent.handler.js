const Posts = require("../../models/post.model");

exports.getRecentPosts = async (req, res) => {
  const posts = await Posts.find({
    author: /.*/i,
  }).exec();
  if (req.query.amount === "all") {
    res.send({ posts: posts, isEnded: true }).end();
    return;
  }
  temp = Array.from(
    {
      length: req.query.amount,
    },
    (_, i) => posts[i]
  );
  const status = temp.length >= posts.length ? true : false;
  temp = temp.filter((v) => !!v);
  res.send({ posts: temp, isEnded: status }).end();
};
