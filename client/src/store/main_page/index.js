import { createSlice } from "@reduxjs/toolkit";
import { loadPosts, saveComment, toggleLike, getSubscribedUsers} from "./operations";

const initialState = {
  posts: [],
  isEnded: null,
  isLoading: true,
  subscribed:[]
}

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.isEnded = action.payload.isEnded;
        state.posts = [...state.posts, ...action.payload.posts];
        state.isLoading = false;
      })
      .addCase(toggleLike.fulfilled, (state, {payload: {status, username, postId}}) => {
        const post = state.posts.find(item => item._id === postId);

        if (status) {
          post.likes.push(username);
        } else {
          const userIndex = post.likes.findIndex(item => item === username);
          post.likes.splice(userIndex, 1);
        }
      })
      .addCase(saveComment.fulfilled, (state, {payload: {comments, postId}}) => {
        const post = state.posts.find(item => item._id === postId);
        post.comments = comments;
      })
        .addCase(getSubscribedUsers.fulfilled, (state, action) => {
          state.subscribed = action.payload;
        })
  },
});

// export const {} = mainPageSlice.actions

export default mainPageSlice.reducer