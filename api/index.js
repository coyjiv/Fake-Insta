const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mainRouter = require("./handlers/main");
const postRouter = require("./handlers/post");

dotenv.config();
const port = process.env.PORT;
const databaseConnectionKey = process.env.DATABASE_CONNECTION_KEY;

app = express();
app.use(express.json());

// breakline (start)

app.use("/", mainRouter);
app.use("/post", postRouter);

// breakline (end)

const startServer = () => {
  app.listen(port);
};

const connectToDatabase = () => {
  const properties = {
    useNewUrlParser: true,
  };
  mongoose.connect(databaseConnectionKey, properties);
  return mongoose.connection;
};

const launch = () => {
  connectToDatabase().once("open", startServer);
  console.log("Server started with no errors");
};

launch();
