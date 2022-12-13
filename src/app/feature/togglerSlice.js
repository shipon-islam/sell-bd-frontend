import { createSlice } from "@reduxjs/toolkit";

//initialized state
const initialState = {
  filterToggle: false,
  layoutToggle: true,
  catToggle: false,
};

// layout,filtert
export const togglerSlice = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    catArea: (state) => {
      state.catToggle = !state.catToggle;
      state.filterToggle = false;
    },
    filterArea: (state) => {
      state.filterToggle = !state.filterToggle;
      state.catToggle = false;
    },
    layoutArea: (state) => {
      state.layoutToggle = !state.layoutToggle;
    },
  },
});
export const { catArea, layoutArea, filterArea } = togglerSlice.actions;
export default togglerSlice.reducer;
