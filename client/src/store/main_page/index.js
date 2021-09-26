import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: []
}

export const mainPageSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
});

// export const {} = mainPageSlice.actions

export default mainPageSlice.reducer