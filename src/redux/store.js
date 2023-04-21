import { configureStore } from '@reduxjs/toolkit';
import { followersReducer } from './followersSlice';

export const store = () =>
  configureStore({
    reducer: {
      followers: followersReducer,
    },
  });
