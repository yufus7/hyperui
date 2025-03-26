import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./apps/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
