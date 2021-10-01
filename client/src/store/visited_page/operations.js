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
    checkIfSubscribed
}