import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { authenticate, getRecommendations, subscribeMain } from "./operations";

const initialState = {
  image: "",
  username: "",
  description: "",
  subscribers: [],
  posts: [],
  subscribed: [],
  recommendations: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.recommendations = action.payload;
      })
    .addCase(subscribeMain.fulfilled, (state, action)=>{
      const { subscribed, username, status } = action.payload;
      if (!status) {

        const copySubscribed = [...subscribed];
        copySubscribed.splice(copySubscribed.indexOf(username), 1);
        state.subscribed = copySubscribed;
      } else {
        state.subscribed = [...subscribed, username];
      }
    })
  },
});

export default userSlice.reducer;
