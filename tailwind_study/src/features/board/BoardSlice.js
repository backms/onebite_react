import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBoards = createAsyncThunk('board/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
});

export const fetchBoardById = createAsyncThunk('board/fetchBoardById', async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
});

const boardSlice = createSlice({
    name: "board",
    initialState: {     // 초기상태
        board: [],
        selectedBoard: null,
        status: 'idle',
        error: null,
    },
    reducers: {},       // 동기 액션을 처리하는 리듀서
    extraReducers: (builder) => {       // 비동기 액션을 처리하는 추가 리듀서
        builder
            .addCase(fetchBoards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBoards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.boards = action.payload;
                state.error = null;
            })
            .addCase(fetchBoards.rejected, (state, action) => {
                state.status = 'failed';
                state.board = action.error.message;
            })
            .addCase(fetchBoardById.fulfilled, (state, action) => {
                state.selectedBoard = action.payload;
                state.error = null;
            });
    },
});

export default boardSlice.reducer;