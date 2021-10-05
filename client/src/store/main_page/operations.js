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

const getSubscribedUsers = createAsyncThunk(
    'mainPage/getSubscribedUsers',
    async (username) => {
        const subscribedNicknames = (await axios(`/user/${username}/subscribed`)).data;
        const fullInfo = subscribedNicknames.map(async (nickname)=>{
             return (await axios(`/user/${nickname}`))
        })
        const res = await  Promise.all(fullInfo)
        return res.map((el)=>el.data);
    }
);
export {
  loadPosts,
  toggleLike,
  saveComment,
    getSubscribedUsers
}