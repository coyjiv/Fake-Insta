const Posts = require("../../models/post.model");
const Users = require("../../models/user.model");

exports.getRecentPosts = async (req, res) => {
  const user = await Users.findOne({
    username: req.body.username,
  });

  if (!user) {
    res.status(404).send("User is not found");
  }

  const posts = await Posts.find({
    author: /.*/i,
  }).exec();
  posts.reverse();
  temp2 = posts.filter((el) => user.subscribed.includes(el.author));
  temp = Array.from(
    {
      length: req.query.amount,
    },
    (_, i) => temp2[i]
  );
  const status = temp.length >= temp2.length ? true : false;
  temp = temp.filter((v) => !!v);
  res.send({ posts: temp, isEnded: status }).end();
};
