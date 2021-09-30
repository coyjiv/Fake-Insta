import { createSlice } from "@reduxjs/toolkit";
import { getUser, getPosts, subscribe } from "./operations";

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
          console.log("pay-to-load",action.payload)
          state.image = action.payload.image
          state.username = action.payload.username
          state.description = action.payload.description
          state.subscribers = action.payload.subscribers
          state.subscribed = action.payload.subscribed
        })
        .addCase(getPosts.fulfilled, (state, action) => {
          state.posts =  action.payload
        })
        .addCase(subscribe.fulfilled, (state, action) =>{
          console.log("vrode podpisalsya", action.payload)
        })
  },
});

// export const {} = visitedPageSlice.actions

export default visitedPageSlice.reducer