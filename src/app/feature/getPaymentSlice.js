import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

//initialized state
const initialState = {
  loading: false,
  isError: null,
  data: null,
};
//fetching payment details
export const fetchPayment = createAsyncThunk("payment/fetch", async () => {
  const { data } = await axios.get("/customer/payment/get");
  return data;
});

export const getPaymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPayment.pending, (state, action) => {
      state.loading = true;
      (state.isError = null), (state.data = null);
    });
    builder.addCase(fetchPayment.fulfilled, (state, action) => {
      state.loading = false;
      (state.isError = null), (state.data = action.payload);
    });
    builder.addCase(fetchPayment.rejected, (state, action) => {
      state.loading = false;
      (state.isError = action.payload), (state.data = null);
    });
  },
});

export default getPaymentSlice.reducer;
