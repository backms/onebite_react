import {configureStore} from "@reduxjs/toolkit";
import boardReducer from "../features/board/boardSlice.js";

const store = configureStore({
    reducer: {
        board: boardReducer,
    }
});

export default store;