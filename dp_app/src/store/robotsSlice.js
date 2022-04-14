import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  robots: [],
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = robotsSlice.actions;

export default robotsSlice.reducer;
