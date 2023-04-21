import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchFollowers } from './operations';

const additionalActions = [fetchFollowers];

const followersSlice = createSlice({
  name: 'followers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFollowers.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(
        isAnyOf(...additionalActions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...additionalActions.map(action => action.pending)),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(...additionalActions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const followersReducer = followersSlice.reducer;

