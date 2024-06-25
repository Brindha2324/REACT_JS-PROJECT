// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; 
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    products: productReducer, //Helps in managing the products....
    auth: authReducer, //  Authentication
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), 
});

export default store;
