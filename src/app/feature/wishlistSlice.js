import { createSlice } from "@reduxjs/toolkit";

//initialized state and get from localstorage
const initialState = {
  wishlist: window.localStorage.getItem("wishlist")
    ? JSON.parse(window.localStorage.getItem("wishlist"))
    : [],
};

// add and remove wishlist functionality
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtoWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      const filterWishlist = state.wishlist.filter(
        (ele) => ele._id !== action.payload
      );
      state.wishlist = filterWishlist;
    },
  },
});
export const { addtoWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
