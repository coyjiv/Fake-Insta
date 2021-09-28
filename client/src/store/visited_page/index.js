import { createSlice } from "@reduxjs/toolkit";
import { getUser, getSubscribed, getPosts } from "./operations";

const initialState = {
  image: "",
  username: "",
  description: "",
  subscribers: [],
  posts: [],
  subscribed: []
}

export const visitedPageSlice = createSlice({
  name: "visitedPage",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
        .addCase(getUser.fulfilled, (state, action) => {
          Object.assign(state, action.payload);
        })
  },
});

// export const {} = visitedPageSlice.actions

export default visitedPageSlice.reducer