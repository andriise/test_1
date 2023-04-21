import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://6442742376540ce2258c8814.mockapi.io/api';


export const fetchFollowers = createAsyncThunk(
  'followers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/followers');
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


