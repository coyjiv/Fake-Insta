import { createSlice } from "@reduxjs/toolkit";
import { commentPost, likePost } from "./operations";
import { getUser, getPosts, subscribe, checkIfSubscribed} from "./operations";

const initialState = {
  image: "",
  username: "",
  description: "",
  subscribers: [],
  posts: [],
  subscribed: [],
    isSubscribing:false,
    isSubscribed:false,
}

export const visitedPageSlice = createSlice({
  name: "visitedPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getUser.fulfilled, (state, action) => {
          state.image = action.payload.image
          state.username = action.payload.username
          state.description = action.payload.description
          state.subscribers = action.payload.subscribers
          state.subscribed = action.payload.subscribed
        })
        .addCase(getPosts.fulfilled, (state, action) => {
          state.posts =  action.payload
        })
        .addCase(checkIfSubscribed.fulfilled, (state, action) =>{
            state.isSubscribed = action.payload;
        })
        .addCase(subscribe.pending, (state,action) =>{
            state.isSubscribing = true;
        })
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
        })
        .addCase(subscribe.fulfilled, (state, action) =>{

            const {subs, aunt, status} = action.payload;
            if (!status){
                const copySubs = [...subs];
                copySubs.splice(
                    copySubs.indexOf(aunt),
                    1
                );
                state.subscribers = copySubs;
                state.isSubscribed = false;
            }
            else{
                state.subscribers = [...subs, aunt];
                state.isSubscribed = true;
            }
            state.isSubscribing = false;
        })
  },
});

// export const {} = visitedPageSlice.actions

export default visitedPageSlice.reducer;
