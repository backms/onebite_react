import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '../features/board/BoardSlice.js';

const store = configureStore({
    reducer: {
        board: boardSlice,
    },
});

export default store;