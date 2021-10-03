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

const getUser = createAsyncThunk(
    'user/getUser',
    async (username) => {
        return (await axios(`/user/${username}`)).data;
    }
);

const getPosts = createAsyncThunk(
    'user/getPosts',
    async (username) => {
        return (await axios(`/user/${username}/posts`)).data;
    }
);
const checkIfSubscribed = createAsyncThunk(
    'user/checkIfSubscribed',
    async ({username, aunt}) => {
        const subs = await axios(`/user/${aunt}/subscribed`)
        console.log(username, aunt, subs)
        if(subs.data.includes(username)){
            return true
        }
         else {
             return false
        }
    }
);

const subscribe = createAsyncThunk(
    'user/subscribe',
    async ({username, aunt, subs}) => {
        const status = await axios.post(`/user/${username}/subscribe`,{"user":`${aunt}`});
        return {status:status.data.status, aunt, subs};
    }
);



export {
    getUser,
    getPosts,
    subscribe,
    checkIfSubscribed,
    commentPost,
    likePost
}