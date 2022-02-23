import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toogle(state, action) {
      state.showCounter = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions
export default counterSlice.reducer;
