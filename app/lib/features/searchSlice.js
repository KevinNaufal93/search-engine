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

export const generateTopics = createAsyncThunk(
  'shuffle/generateTopics',
  async(query) => {
    const results = await searchApi.generateTrendingTopic(query);
    return results
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchValue: '',
    results: [],
    status: 'idle', // ENUM: 'idle' | 'loading' | 'succeeded' | 'failed'
    currentAction: '', // ENUM: 'search' | 'generate'
    error: null
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setInitialValue: (state, action) => {
      state.searchValue = '',
      state.status = 'idle',
      state.currentAction = '',
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
        state.currentAction = 'search'
        state.results = action.payload;
      })
      .addCase(performSearch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(generateTopics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(generateTopics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentAction = 'generate'
        state.results = action.payload;
      })
      .addCase(generateTopics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setSearchValue, setInitialValue } = searchSlice.actions;
export default searchSlice.reducer;