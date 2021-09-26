const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mainRouter = require("./handlers/main");
const postRouter = require("./handlers/post");
const userRouter = require("./handlers/user");
const cors=require("cors");

dotenv.config();
const port = process.env.PORT;
const databaseConnectionKey = process.env.DATABASE_CONNECTION_KEY;

const app = express();
app.use(express.json());

const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))

// breakline (start)

app.use("/", mainRouter);
app.use("/post", postRouter);
app.use("/user", userRouter);

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
