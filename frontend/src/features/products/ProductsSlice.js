import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductApi from "./ProductApi";

export const loadProductAsync = createAsyncThunk(
  "products/loadProductsStatus",
  async () => {
    const res = await ProductApi.getAllProducts();
    return res.data;
  }
);

export const addProductAsync = createAsyncThunk(
  "products/addProductStatus",
  async (product, { rejectWithValue }) => {
    try {
      const res = await ProductApi.saveProduct(product);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProductStatus",
  async (id) => {
    await ProductApi.deleteProduct(id);
    return id;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null
  },
  reducers: {},
  extraReducers: {
    [loadProductAsync.pending]: (state) => {
      state.status = "loadProductsAsync pending...";
    },
    [loadProductAsync.fulfilled]: (state, action) => {
      state.status = "loadProductAsync success...";
      state.products = action.payload;
    },
    [loadProductAsync.rejected]: (state) => {
      state.status = "loadProductAsync error...";
    },
    [addProductAsync.pending]: (state) => {
      state.status = "addProductAsync pending...";
    },
    [addProductAsync.fulfilled]: (state, action) => {
      state.status = "addProductAsync success...";
      state.products = action.payload;
    },
    [addProductAsync.rejected]: (state, action) => {
      state.status = "addProductAsync error...";
      throw action.payload;
    },
    [deleteProductAsync.pending]: (state) => {
      state.status = "deleteProductAsync pending...";
    },
    [deleteProductAsync.fulfilled]: (state, action) => {
      state.status = "deleteProductAsync success...";
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    [deleteProductAsync.rejected]: (state) => {
      state.status = "deleteProductAsync error...";
    }
  }
});

export default productsSlice.reducer;
export const { addProduct } = productsSlice.actions;
