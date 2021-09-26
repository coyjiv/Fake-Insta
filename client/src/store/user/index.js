import { createSlice } from "@reduxjs/toolkit";
import { authenticate, getRecommendations } from "./operations";

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
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.recommendations = action.payload;
      })
  },
});

// export const {} = userSlice.actions

export default userSlice.reducer