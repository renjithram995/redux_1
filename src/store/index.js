import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toogle(state, action) {
            state.showCounter = action.payload;
        }
    }
})

const store = configureStore({
    // reducer: {
    //     counter: counterSlice.reducer
    // }
    reducer: counterSlice.reducer //single
});
export const counterActions = counterSlice.actions
export default store;
