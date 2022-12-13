import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

//initialized state
const initialState = {
  info: null,
  error: false,
  isLoading: false,
};

//get authenticate user from api
export const fetchUser = createAsyncThunk("getme/fetchUser", async () => {
  const res = await axios.get("/user/get/me");

  return res.data;
});

export const userInfoSlice = createSlice({
  name: "getme",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.info = null;
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, actions) => {
      state.info = actions.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, actions) => {
      state.info = null;
      state.isLoading = false;
      state.error = actions.payload;
    });
  },
});

export default userInfoSlice.reducer;
