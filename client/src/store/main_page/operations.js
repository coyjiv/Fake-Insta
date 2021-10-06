import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit");

const loadPosts = createAsyncThunk(
  'mainPage/loadPosts',
  async ({from, to, username}) => {
    return (await axios.post(`/recent?from=${from}&to=${to}`, {username})).data;
  }
);

const toggleLike = createAsyncThunk(
  'mainPage/toggleLike',
  async ({postId, username}) => {
    const response = (await axios.post(`/post/${postId}/like`, {user: username})).data;
    return {...response, username, postId};
  }
);

const saveComment = createAsyncThunk(
  'mainPage/saveComment',
  async ({postId, username, message}) => {
    const comments = (await axios.post(`/post/${postId}/comment`, {user: username, message})).data;
    return {comments, postId};
  }
);
export {
  loadPosts,
  toggleLike,
  saveComment,
}