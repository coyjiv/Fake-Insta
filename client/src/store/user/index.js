import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  image: "",
  username: "",
  description: "",
  subscribers: [],
  posts: [],
  subscriptions: [],
  recommendations: []
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
});

// export const {} = userSlice.actions

export default userSlice.reducer