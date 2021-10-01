import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {
  },
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

export default visitedPageSlice.reducer