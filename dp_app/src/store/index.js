import { configureStore, tuhnk } from "@reduxjs/toolkit";
import robotsReducer from "../store/robotsSlice";
import { actionLogger } from "./middlewares/actionLogger";

export const store = configureStore({
  reducer: {
    robots: robotsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionLogger),
});
