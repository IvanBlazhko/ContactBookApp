import { createSlice } from '@reduxjs/toolkit';

export const myFilter = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterValue } = myFilter.actions;
