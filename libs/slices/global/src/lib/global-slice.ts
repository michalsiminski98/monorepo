import { createSlice } from '@reduxjs/toolkit';

export interface IGlobalState {
  value: number;
}

export const initialState: IGlobalState = {
  value: 12,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, { payload }) {
      state.value += payload;
    },
  },
});

export const globalActions = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
