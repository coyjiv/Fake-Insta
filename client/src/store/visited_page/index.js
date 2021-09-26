import { createSlice } from "@reduxjs/toolkit";

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
});

// export const {} = visitedPageSlice.actions

export default visitedPageSlice.reducer