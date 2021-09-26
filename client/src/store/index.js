import { configureStore } from "@reduxjs/toolkit";
import visitedPageReducer from "./visited_page";
import mainPageReducer from "./main_page";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    visitedPage: visitedPageReducer,
    mainPage: mainPageReducer,
    user: userReducer
  },
});