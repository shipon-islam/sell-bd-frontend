import { createSlice } from "@reduxjs/toolkit";

//initialization state
const initialState = {
  subtotal: 0,
  deliveryCharge: 50,
  totalAmount: 0,
  product: window.localStorage.getItem("item")
    ? JSON.parse(window.localStorage.getItem("item"))
    : [],
};

// card add,remove,increament,decreament reducers
export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addcard: (state, action) => {
      state.product.push({
        ...action.payload,
        quantity: 1,
        subtotal: action.payload.price,
      });
    },
    removecard: (state, action) => {
      state.product = state.product.filter(
        (element) => element._id !== action.payload
      );
    },
    increament: (state, action) => {
      const findcard = state.product.find((ele) => ele._id === action.payload);
      if (findcard.quantity < 6) {
        const quantity = Number(findcard.quantity) + 1;
        findcard.quantity = quantity;

        findcard.subtotal = Number(findcard.price) * quantity;
      }
    },
    decreament: (state, action) => {
      const findcard = state.product.find((ele) => ele._id === action.payload);
      if (findcard.quantity > 1) {
        const quantity = Number(findcard.quantity) - 1;
        findcard.quantity = quantity;

        findcard.subtotal = Number(findcard.price) * quantity;
      }
    },
    total: (state, action) => {
      let totals = state.product.reduce((accumulator, curValue) => {
        return accumulator + Number(curValue.subtotal);
      }, 0);
      state.subtotal = totals;

      state.totalAmount = Number(totals) + Number(state.deliveryCharge);
    },
  },
});
export const { addcard, removecard, increament, decreament, total } =
  cardSlice.actions;
export default cardSlice.reducer;
