import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRobotsThunk } from "../thunks/robotsThunks";

const initialState = {
  robots: [],
  fetchingRobots: false,
  errorFetching: null,
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRobotsThunk.fulfilled, (state, { payload: robots }) => {
      state.robots = robots;
    });
  },
});

export const {} = robotsSlice.actions;

export default robotsSlice.reducer;
