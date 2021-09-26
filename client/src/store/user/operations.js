const { createAsyncThunk } = require("@reduxjs/toolkit")

const authenticate = createAsyncThunk(
  'user/authenticate',
  async ({username, password}) => {
    const response = await fetch("http://localhost:4500/user/login", {
      body: JSON.stringify({username, password}),
    });

    return await response.json();
  }
);

const getRecommendations = createAsyncThunk(
  'user/getRecommendations',
  async (username) => {
    const response = await fetch(`http://localhost:4500/user/${username}/recommendations`);
    return await response.json();
  }
);

export {
  authenticate,
  getRecommendations
}