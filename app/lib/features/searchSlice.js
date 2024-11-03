// lib/features/searchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchApi } from '../../services/api';


export const performSearch = createAsyncThunk(
  'search/performSearch',
  async (query) => {
    const results = await searchApi.searchTrendingTopic(query);
    return results;
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    results: [],
    status: 'idle', // ENUM: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setInitialValue: (state, action) => {
      state.searchValue = '',
      state.status = 'idle',
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(performSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(performSearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.results = action.payload;
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setSearchValue, setInitialValue } = searchSlice.actions;
export default searchSlice.reducer;