import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks for fetching, adding, and deleting products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
  const response = await axios.post('https://dummyjson.com/products/add', product);
  return response.data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
  await axios.delete(`https://dummyjson.com/products/${productId}`);
  return productId;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Update products list
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error fetching products';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload); // Add the new product to the list using PUSH
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload

        );
      });
  },
});

export default productSlice.reducer;
