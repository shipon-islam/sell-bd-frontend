import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// initialized state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// product add and update post requiest from admin
export const addAndUpdateFetch = createAsyncThunk(
  "addAndUpdate/addAndUpdateFetch",
  async ({ _id, product, features, images, paramimage }, thunkAPI) => {
    try {
      let formdata = new FormData();
      Object.keys(product).forEach((item) => {
        formdata.append(item, product[item]);
      });
      Object.values(features).forEach((values) => {
        formdata.append("features[]", values);
      });
      if (images.length > 0) {
        for (let image of images) {
          formdata.append("image", image);
        }
      }

      for (let image of paramimage) {
        formdata.append("image[]", image);
      }

      const { data } = await axios.put(`/product/update/${_id}`, formdata);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

//add update product functionality
export const productAddUpdate = createSlice({
  name: "addAndUpdate",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addAndUpdateFetch.pending, (state) => {
      state.data = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addAndUpdateFetch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addAndUpdateFetch.rejected, (state, action) => {
      state.data = [];
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default productAddUpdate.reducer;
