import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../reducers/adminReducer";
import orderReducer from "../reducers/orderReducer";
import paymentReducer from "../reducers/paymentReducer";
import ratingReducer from "../reducers/ratingReducer";
import userReducer from "../reducers/userReducer";
import wasteReducer from "../reducers/wasteReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    order: orderReducer,
    rating: ratingReducer,
    payment: paymentReducer,
    producedWaste: wasteReducer
  },
});
