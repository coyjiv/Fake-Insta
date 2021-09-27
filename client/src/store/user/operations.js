import axios from "axios";
const { createAsyncThunk } = require("@reduxjs/toolkit")

const authenticate = createAsyncThunk(
  'user/authenticate',
  async ({username, password}) => {
    return (await axios.post("/user/login", {username, password})).data;
  }
);

const getRecommendations = createAsyncThunk(
  'user/getRecommendations',
  async (username) => {
    return (await axios(`/user/${username}/recommendations`)).data;
  }
);

export {
  authenticate,
  getRecommendations
}