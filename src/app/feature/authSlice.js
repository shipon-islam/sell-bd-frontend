import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

//register user
export const signup = createAsyncThunk(
  "auth/signup",
  async ({ data, navigate }) => {
    try {
      const user = await axios.post("/user/register", data);
      if (user && user.data && !user.data.errors) {
        localStorage.setItem("user", JSON.stringify(user.data));
        navigate("/");
      }
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//login user
export const login = createAsyncThunk(
  "auth/login",
  async ({ data, navigate, redirect }) => {
    try {
      const user = await axios.post("/user/login", data);
      if (user && user.data && !user.data.message) {
        localStorage.setItem("user", JSON.stringify(user.data));
        navigate(redirect);
      }
      return user.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//logout user
export const logout = createAsyncThunk("auth/logout", async (navigate) => {
  await localStorage.removeItem("user");
  navigate("/");
});

const initialState = {
  user: JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  error: false,
  errorMsg: null,
  isLoading: false,
  isSuccess: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.errorMsg = null;
      state.user = null;
      state.error = null;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.errorMsg = null;
      state.user = null;
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
    });
    builder.addCase(login.fulfilled, (state, actions) => {
      if (actions.payload.message) {
        state.errorMsg = actions.payload.message;
        state.user = null;
        state.isLoading = false;
        state.error = null;
        state.isSuccess = false;
      } else {
        state.errorMsg = null;
        state.user = actions.payload;
        state.isLoading = false;
        state.error = null;
        state.isSuccess = true;
      }
    });
    builder.addCase(login.rejected, (state, actions) => {
      state.user = null;
      state.isLoading = false;
      state.error = actions.payload;
      state.isSuccess = false;
      state.errorMsg = null;
    });
    builder.addCase(signup.pending, (state) => {
      state.user = null;
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
      state.errorMsg = null;
    });
    builder.addCase(signup.fulfilled, (state, actions) => {
      if (actions.payload.errors) {
        state.errorMsg = actions.payload.errors;
        state.user = null;
        state.isLoading = false;
        state.error = null;
        state.isSuccess = false;
      } else {
        state.errorMsg = null;
        state.user = actions.payload;
        state.isLoading = false;
        state.error = null;
        state.isSuccess = true;
      }
    });
    builder.addCase(signup.rejected, (state, actions) => {
      state.user = null;
      state.errorMsg = null;
      state.isLoading = false;
      state.error = actions.payload;
      state.isSuccess = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
