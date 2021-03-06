const Users = require("../../models/user.model");
const Posts = require("../../models/post.model");
const Passwords = require("../../models/login.model");

const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "yalukaiwo",
  api_key: "332999467945282",
  api_secret: "ttJmPnCNV0NMnGvLbwSBJnjR-j4",
});

exports.getAllUsers = async (req, res) => {
  const users = await Users.find({
    username: /.*/i,
  }).exec();

  res.status(200).send(users).end();
};

exports.getUserByUserName = async (req, res) => {
  const user = await Users.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  if (!user) {
    res.status(404).send("Not found").end();
    return;
  }

  res.send(user).end();
};

exports.getUsersSubscriptions = async (req, res) => {
  const user = await Users.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  if (!user) {
    res.status(404).send("Not found").end();
    return;
  }

  res.send(user.subscribed).end();
};

exports.getRecommendations = async (req, res) => {
  const users = await Users.find({
    username: /.*/i,
  }).exec();

  const user = await Users.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  if (!user) {
    res.status(404).send("Not found").end();
    return;
  }

  temp = users.filter(
    (el) =>
      !user.subscribed.includes(el.username) &&
      el.username !== req.params.username
  );

  res.status(200).send(temp).end();
};

exports.subscribeToUser = async (req, res) => {
  if (!req.body.user) {
    res.status(400).send("'target' is required").end();
    return;
  }

  if (req.params.username === req.body.user) {
    res.status(400).send("You can't subscribe to yourself").end();
    return;
  }

  const currentUser = await Users.findOne({
    username: req.body.user,
  })
    .exec()
    .catch(() => {});

  if (!currentUser) {
    res.status(404).send("User not found").end();
    return;
  }

  const targetUser = await Users.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  if (!targetUser) {
    res.status(404).send("Target user not found").end();
    return;
  }

  const status = [];

  if (
    !targetUser.subscribers.includes(req.body.user) &&
    !currentUser.subscribed.includes(req.params.username)
  ) {
    targetUser.subscribers.push(req.body.user);
    currentUser.subscribed.push(req.params.username);
    targetUser.save();
    currentUser.save();
    status.push(true);
  } else {
    targetUser.subscribers.splice(
      targetUser.subscribers.indexOf(req.body.user),
      1
    );
    currentUser.subscribed.splice(
      currentUser.subscribed.indexOf(req.params.username),
      1
    );
    targetUser.save();
    currentUser.save();
    status.push(false);
  }

  res.status(200).send({ status: status[0] }).end();
};

exports.changeUsername = async (req, res) => {
  if (!req.body.newUsername) {
    res.status(400).send("'newUsername' is required").end();
    return;
  }

  const check = await Users.findOne({
    username: req.body.newUsername,
  })
    .exec()
    .catch(() => {});

  if (check) {
    res.status(400).send("Username already exists").end();
    return;
  }

  const user = await Users.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  const login = await Passwords.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  if (!user || !login) {
    res.status(404).send("Not found").end();
    return;
  }

  login.username = req.body.newUsername;
  user.username = req.body.newUsername;
  user.save();
  login.save();
  res.send(user).end();
};

exports.changeDescription = async (req, res) => {
  if (!req.body.newDesc && req.body.newDesc !== "") {
    res.status(400).send("'newDesc' is required").end();
    return;
  }
  const user = await Users.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  if (!user) {
    res.status(404).send("Not found").end();
    return;
  }

  user.description = req.body.newDesc;
  user.save();
  res.send(user).end();
};

exports.changeImage = async (req, res) => {
  if (!req.files) {
    res.status(400).send("'newImage' is required").end();
    return;
  }

  const file = req.files.image;
  const user = await Users.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  if (!user) {
    res.status(404).send("Not found").end();
    return;
  }

  file.name = `${user.id}.png`;

  const base64 = file.data.toString("base64");

  const response = await cloudinary.v2.uploader.upload(
    `data:image/png;base64,${base64}`,
    {
      public_id: user.id,
      folder: "avatars",
      overwrite: true,
      invalidate: true,
      width: 1000,
      height: 1000,
      crop: "fill",
    }
  );

  user.image = response.url;

  user.save();
  res.send(user).end();
};

exports.changePassword = async (req, res) => {
  if (!req.body.password) {
    res.status(400).send("'password' is required").end();
    return;
  }

  if (req.body.password.length < 4) {
    res.status(400).send("Should be longer than 4").end();
    return;
  }

  const login = await Passwords.findOne({
    username: req.params.username,
  })
    .exec()
    .catch(() => {});

  if (!login) {
    res.status(404).send("User not found").end();
    return;
  }
  login.password = req.body.password;
  login.save();

  res.status(200).send("Success").end();
};

exports.createUser = async (req, res) => {
  if (!req.body) {
    res
      .status(400)
      .send("Every field must be filled (image, username, password)")
      .end();
    return;
  }
  if (!req.files || !req.body.username || !req.body.password) {
    res
      .status(400)
      .send("Every field must be filled (image, username, password)")
      .end();
    return;
  }

  const file = req.files.image;

  const check = await Users.findOne({
    username: req.body.username,
  })
    .exec()
    .catch(() => {});

  if (check) {
    res.status(400).send("Username already exists").end();
    return;
  }

  const login = new Passwords({
    username: req.body.username,
    password: req.body.password,
  });

  const user = new Users({
    image: "",
    username: req.body.username,
    description: "",
    posts: [],
    subscribed: [],
    subscribers: [],
  });

  file.name = `${user.id}.png`;

  const base64 = file.data.toString("base64");

  const response = await cloudinary.v2.uploader.upload(
    `data:image/png;base64,${base64}`,
    {
      public_id: user.id,
      folder: "avatars",
      overwrite: true,
      invalidate: true,
      width: 1000,
      height: 1000,
      crop: "fill",
    }
  );

  user.image = response.url;

  login.save();
  user.save();
  res.send(user).end();
};

exports.login = async (req, res) => {
  if (!req.body.password || !req.body.username) {
    res.status(400).send("'username' and 'password' required");
    return;
  }

  const login = await Passwords.findOne({
    username: req.body.username,
  })
    .exec()
    .catch(() => {});

  if (!login) {
    res.status(400).send("Incorrect username or password").end();
    return;
  }

  const user = await Users.findOne({
    username: req.body.username,
  })
    .exec()
    .catch(() => {});

  if (login.password === req.body.password) {
    res.send(user);
  } else {
    res.status(400).send("Incorrect username or password").end();
  }
};

exports.getUserPosts = async (req, res) => {
  const user = await Users.findOne({
    username: req.params.username,
  })
    .exec()
    .catch();

  if (!user) {
    return res.status(404).send("User not found").end();
  }

  const posts = user.posts;

  const postsMapped = posts.map(async (el) => {
    const post = await Posts.findById(el);
    return await post;
  });

  const postsSendable = await Promise.all(postsMapped);

  res.send(postsSendable).end();
};
