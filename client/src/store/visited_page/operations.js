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
        return (await axios(`/user/${username}/posts`)).data;
    }
);

const subscribe = createAsyncThunk(
    'user/subscribe',
    async ({username, aunt}) => {
        console.log(aunt)
        return (await axios.post(`/user/${username}/subscribe`), {user:aunt}).data;
    }
);

export {
    getUser,
    getPosts,
    subscribe
}