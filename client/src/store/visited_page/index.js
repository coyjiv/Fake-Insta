import { createSlice } from "@reduxjs/toolkit";
import { commentPost, likePost } from "./operations";

const initialState = {
  image: "",
  username: "",
  description: "",
  subscribers: [],
  posts: [],
  subscribed: [],
};

export const visitedPageSlice = createSlice({
  name: "visitedPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(commentPost.fulfilled, (state, action) => {
        const post = state.posts.find((el) => el.id === action.payload.postId);
        post.comments = [...action.payload.comments];
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const post = state.posts.find((el) => el.id === action.payload.postId);
        if (action.payload.status) {
          const temp = post.likes.push(action.payload.username);
          post.likes = temp;
        } else {
          const temp = post.likes.splice(
            post.likes.indexOf(action.payload.username),
            1
          );
          post.likes = temp;
        }
      });
  },
});

// export const {} = visitedPageSlice.actions

export default visitedPageSlice.reducer;
