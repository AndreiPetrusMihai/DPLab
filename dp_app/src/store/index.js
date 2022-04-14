import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../store/robotsSlice";

export const store = configureStore({
  reducer: {
    counter: robotsReducer,
  },
});
