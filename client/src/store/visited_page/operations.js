import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit")


const getUser = createAsyncThunk(
    'user/getUser',
    async (username) => {
        return (await axios(`/user/${username}`)).data;
    }
);

const getPosts = createAsyncThunk(
    'user/getPosts',
    async (username) => {
        return (await axios(`/user/${username}`)).data.posts;
    }
);

export {
    getUser,
    getPosts
}