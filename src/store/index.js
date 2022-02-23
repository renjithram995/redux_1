import { configureStore } from '@reduxjs/toolkit'

import auth from './auth';
import count from './counter';

const store = configureStore({
    reducer: {
        count,
        auth
    }
    // reducer: counterSlice.reducer //single
});

export default store;
