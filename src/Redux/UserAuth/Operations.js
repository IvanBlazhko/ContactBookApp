import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerNewUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch {
      return rejectWithValue(
        'Sorry, we were unable to create a new account. Please try again.'
      );
    }
  }
);

export const userLogIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthToken(response.data.token);
      return response.data;
    } catch {
      return rejectWithValue('Failed to login. Please try again.');
    }
  }
);

export const userLogOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      clearAuthToken();
    } catch {
      return rejectWithValue('Failed to log out. Please try again.');
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue(null);
    }
    setAuthToken(token);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue('Oops! Something went wrong');
    }
  }
);
