import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit");

const commentPost = createAsyncThunk(
  "user/commentPost",
  async ({ postId, username, message }) => {
    const comments = await axios.post(`/post/${postId}/comment`, {
      user: username,
      message: message,
    });
    return {
      comments: comments.data,
      postId,
    };
  }
);

const likePost = createAsyncThunk(
  "user/likePost",
  async ({ postId, username }) => {
    const status = await axios.post(`/post/${postId}/like`, {
      user: username,
    });
    return {
      status: status.data,
      postId,
      username,
    };
  }
);

export { commentPost, likePost };
