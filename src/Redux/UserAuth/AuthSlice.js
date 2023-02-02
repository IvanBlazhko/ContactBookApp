import { createSlice } from '@reduxjs/toolkit';
import {
  registerNewUser,
  userLogIn,
  userLogOut,
  refreshUser,
} from './Operations';

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(registerNewUser.pending, state => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogIn.pending, state => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(userLogIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(userLogOut.pending, state => {
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
      })
      .addCase(refreshUser.pending, state => {
        state.error = null;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
