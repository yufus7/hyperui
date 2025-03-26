import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// base api
import hyperApi from "../../api/hyperApi";

const initialState = {
  products: [],
  productsLoading: true,
};

export const fetchProducts = createAsyncThunk(
  "package/fetchProducts",
  async () => {
    try {
      const response = await hyperApi.post(`/products/list`);

      return response.data.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.data?.message ||
          "Veriler alınırken hata meydana geldi!"
      );
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.products = [];
        state.productsLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products = [];
        state.productsLoading = false;
      });
  },
});

export default productSlice.reducer;
