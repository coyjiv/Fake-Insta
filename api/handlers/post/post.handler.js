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

  if (!post) {
    res.status(404).send("Not found").end();
    return;
  }

  if (!!post.isLikedByGuest) {
    post.isLikedByGuest = false;
    post.likeAmount--;
  } else {
    post.isLikedByGuest = true;
    post.likeAmount++;
  }

  post.save();

  res.status(200).send({ status: post.isLikedByGuest });
};

exports.writeCommentOnPost = async (req, res) => {
  const post = await Posts.findById(req.params.postId).catch(() => {
    res.status(404).send("Not found").end();
    return;
  });

  if (!post) {
    res.status(404).send("Not found").end();
    return;
  }

  post.comments.push({ author: "guest", text: req.body.message });

  post.save();

  res.status(200).send(post.comments);
};

exports.createPost = async (req, res) => {
  const post = new Posts({
    image:
      req.body.image ||
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    author: req.body.author || "guest",
    description: req.body.description || "",
    likeAmount: Math.ceil(Math.random() * 1000),
    isLikedByGuest: false,
    comments: [],
  });

  post.save();

  res.status(200).send(post);
};
