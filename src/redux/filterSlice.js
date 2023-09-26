import { createSlice } from '@reduxjs/toolkit';
import { statusFilter } from './constants';
const filtersInitialState = {
  filter: statusFilter.filter,
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
