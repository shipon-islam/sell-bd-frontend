import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import cardReducer from "./feature/cardSlice";
import getPaymentReducer from "./feature/getPaymentSlice";
import getProductReducer from "./feature/getProductSlice";
import togglerReducer from "./feature/togglerSlice";
import userInfoMeReducer from "./feature/userInfoSlice";
import wishlistReducer from "./feature/wishlistSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userInfo: userInfoMeReducer,
    toggler: togglerReducer,
    productList: getProductReducer,
    cardList: cardReducer,
    wishlists: wishlistReducer,
    payment: getPaymentReducer,
  },
});
export default store;
