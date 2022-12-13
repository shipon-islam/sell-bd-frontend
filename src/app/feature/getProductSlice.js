import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

//initialized state
const initialState = {
  product: [],
  filterProduct: [],
  maxPrice: null,
  searchProduct: [],
  loading: false,
};

//feching product event
export const fetchProduct = createAsyncThunk(
  "getproduct/fetchProduct",
  async () => {
    const { data } = await axios.get("/product/get/all");
    return data;
  }
);

//fetching funtionality
export const getProductSlice = createSlice({
  name: "getproduct",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
      state.product = [];
      state.filterProduct = [];
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.filterProduct = action.payload;
      state.maxPrice = Math.max(...action.payload.map((ele) => ele.price));
      state.loading = false;
    });
  },
  reducers: {
    filterCategory: (state, action) => {
      const value = action.payload.toLowerCase();
      if (value === "all") {
        state.filterProduct = state.product;
      } else {
        state.filterProduct = state.product.filter(
          (ele) => ele.subcategory.toLowerCase() === value
        );
      }
    },
    filterSearch: (state, action) => {
      state.searchProduct = state.product.filter((ele) =>
        ele.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    filterPriceRange: (state, action) => {
      state.filterProduct = state.product.filter((ele) => {
        if (ele.price <= action.payload) {
          return ele;
        }
      });
    },
    filterSelectPrice: (state, action) => {
      if (action.payload === "lowestprice") {
        state.filterProduct.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      }
      if (action.payload === "highestprice") {
        state.filterProduct.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      }
    },
    clearFilter: (state) => {
      state.filterProduct = state.product;
    },
  },
});
export const {
  filterCategory,
  filterSearch,
  filterPriceRange,
  filterSelectPrice,
  clearFilter,
} = getProductSlice.actions;
export default getProductSlice.reducer;
