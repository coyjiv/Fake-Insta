import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { authenticate, getRecommendations } from "./operations";

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
      });
  },
});

// export const {} = userSlice.actions

export default userSlice.reducer;
