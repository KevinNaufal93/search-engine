// lib/store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer
    }
  });
};