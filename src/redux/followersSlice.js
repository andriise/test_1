import { createSlice } from '@reduxjs/toolkit';

const FollowerInitialState = [
  {
    user: 'user 1',
    tweets: 60,
    followers: 26,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/281.jpg',
    id: '1',
  },
  {
    user: 'user 2',
    tweets: 63,
    followers: 11,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1193.jpg',
    id: '2',
  },
  {
    user: 'user 3',
    tweets: 23,
    followers: 16,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/573.jpg',
    id: '3',
  },
];

const followersSlice = createSlice({
  name: 'followers',
  initialState: FollowerInitialState,
  reducers: {
    addFollower(state, action) {
      state.push(action.payload);
      console.log(state);
    },
    deleteFollower(state, action) {
      console.log(state);
    },
  },
});

export const followersReducer = followersSlice.reducer;
