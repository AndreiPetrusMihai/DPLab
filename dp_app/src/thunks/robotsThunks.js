import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRobotsApi } from "../api/robotsApi";

export const getRobotsThunk = createAsyncThunk("getRobots", () => {
  return getRobotsApi();
});
