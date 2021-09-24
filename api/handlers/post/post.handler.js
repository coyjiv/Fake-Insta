const Posts = require("../../models/post.model");

exports.getAllPosts = async (req, res) => {
  const posts = await Posts.find({
    author: /.*/i,
  }).exec();

  res.send(posts.reverse()).end();
};

exports.getPostById = async (req, res) => {
  const post = await Posts.findById(req.params.postId).catch(() => {
    res.status(404).send("Not Found").end();
    return;
  });

  if (!post) {
    res.status(404).send("Not Found").end();
    return;
  }

  res.send(post);
};

exports.getCommentsOnPost = async (req, res) => {
  const post = await Posts.findById(req.params.postId).catch(() => {
    res.status(404).send("Not found").end();
    return;
  });

  if (!post) {
    res.status(404).send("Not found").end();
    return;
  }

  res.status(200).send(post.comments).end();
};

exports.getLastCommentOnPost = async (req, res) => {
  const post = await Posts.findById(req.params.postId).catch(() => {
    res.status(404).send("Not found").end();
    return;
  });

  if (!post) {
    res.status(404).send("Not found").end();
    return;
  }

  res.status(200).send(post.comments.reverse()[0]);
};

exports.toggleLikeOnPost = async (req, res) => {
  const post = await Posts.findById(req.params.postId).catch(() => {
    res.status(404).send("Not found").end();
    return;
  });

  if (!req.body.user) {
    res.status(400).send("'user' variable is required").end();
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
  const post = await Posts.findById(req.params.postId).catch(() => {
    res.status(404).send("Not found").end();
    return;
  });

  if (!req.body.user || !req.body.message) {
    res.status(400).send("'user' and 'message'  variables are required").end();
    return;
  }

  if (!post) {
    res.status(404).send("Not found").end();
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
  const post = await new Posts({
    image: req.body.image,
    author: req.body.author,
    description: req.body.description,
    likes: [],
    comments: [],
  });

  post.save();

  res.status(200).send(post).end();
};
