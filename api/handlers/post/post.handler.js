const Posts = require("../../models/post.model");
const Users = require("../../models/user.model");

exports.getAllPosts = async (req, res) => {
  const posts = await Posts.find({
    author: /.*/i,
  }).exec();

  res.send(posts.reverse()).end();
};

exports.getPostById = async (req, res) => {
  const post = await Posts.findById(req.params.postId)
    .exec()
    .catch(() => {});

  if (!post) {
    res.status(404).send("Not Found").end();
    return;
  }

  res.send(post).end();
};

exports.getCommentsOnPost = async (req, res) => {
  const post = await Posts.findById(req.params.postId)
    .exec()
    .catch(() => {});

  if (!post) {
    res.status(404).send("Not found").end();
    return;
  }

  res.status(200).send(post.comments).end();
};

exports.getLastCommentOnPost = async (req, res) => {
  const post = await Posts.findById(req.params.postId)
    .exec()
    .catch(() => {});

  if (!post) {
    res.status(404).send("Not found").end();
    return;
  }

  res.status(200).send(post.comments.reverse()[0]);
};

exports.toggleLikeOnPost = async (req, res) => {
  const post = await Posts.findById(req.params.postId)
    .exec()
    .catch(() => {});

  if (!req.body.user) {
    res.status(400).send("'user' variable is required").end();
    return;
  }

  const user = await Users.findOne({
    username: req.body.user,
  })
    .exec()
    .catch(() => {});

  if (!user) {
    res.status(404).send("User not found").end();
    return;
  }

  if (!post) {
    res.status(404).send("Not found").end();
    return;
  }

  const status = [];

  if (post.likes.includes(req.body.user)) {
    post.likes.splice(post.likes.indexOf(req.body.user), 1);
    status.push(false);
  } else {
    post.likes.push(req.body.user);
    status.push(true);
  }

  post.save();

  res.status(200).send({ status: status[0] }).end();
};

exports.writeCommentOnPost = async (req, res) => {
  const post = await Posts.findById(req.params.postId)
    .exec()
    .catch(() => {});

  if (!req.body.user || !req.body.message) {
    res.status(400).send("'user' and 'message'  variables are required").end();
    return;
  }

  if (!post) {
    res.status(404).send("Not found").end();
    return;
  }

  const user = await Users.findOne({
    username: req.body.user,
  })
    .exec()
    .catch(() => {});

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  post.comments.push({ author: req.body.user, message: req.body.message });

  post.save();

  res.status(200).send(post.comments).end();
};

exports.createPost = async (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .send("Every field must be filled (image, author, description)")
      .end();
    return;
  }
  if (!req.body.image || !req.body.author || !req.body.description) {
    res
      .status(400)
      .send("Every field must be filled (image, author, description)")
      .end();
    return;
  }

  const user = await Users.findOne({
    username: req.body.author,
  })
    .exec()
    .catch(() => {});

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  const post = await new Posts({
    image: req.body.image,
    author: req.body.author,
    description: req.body.description,
    likes: [],
    comments: [],
  });

  post.save();
  user.posts.push(post.id);
  user.save();

  res.status(200).send(post).end();
};

exports.getPostsByIds = async (req, res) => {
  if (!req.body.posts) {
    res.status(400).send("'posts' is required").end();
    return;
  }

  const result = req.body.posts.map(async (el) => {
    const post = await Posts.findById(el)
      .exec()
      .catch(() => {});

    if (!post) {
      return;
    }

    return post;
  });

  temp = await Promise.all(result);

  postsArray = temp.filter((el) => !!el);
  res.send(postsArray.reverse());
};
