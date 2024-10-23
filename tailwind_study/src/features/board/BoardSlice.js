import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

// 게시글 목록 조회
export const fetchBoards = createAsyncThunk(
    'board/fetchBoards', async () => {
    const response = await axios.get('/api/board?page=1&size=5');
    return response.data;
});

// 게시글 단건 조회
export const fetchBoardById = createAsyncThunk(
    'board/fetchBoardById', async (boardId) => {
    const response = await axios.get(`/api/board/${boardId}`);
    return response.data;
});

// 게시글 등록
export const createBoard = createAsyncThunk(
    'board/addBoard',
    async (boardData, {rejectWithValue}) => {
    try {
        const response = await axios.post("/api/board", boardData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

// 게시글 수정
export const updateBoard = createAsyncThunk(
    'board/updateBoard', async ({ boardId, boardData }, {rejectWithValue}) => {
        try {
            const response = await axios.put(`/api/board/${boardId}`, boardData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
})

const boardSlice = createSlice({
    name: "board",
    initialState: {     // 초기상태
        board: [],
        selectedBoard: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        clearSelectedBoard: (state) => {
            state.selectedBoard = null;
        }
    },
    extraReducers: (builder) => {       // 비동기 액션을 처리하는 추가 리듀서
        builder
            // 게시글 목록 조회
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
                state.error = action.error.message;
            })
            // 게시글 단건 조회
            .addCase(fetchBoardById.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchBoardById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedBoard = action.payload;
                state.error = null;
            })
            .addCase(fetchBoardById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // 게시글 등록
            .addCase(createBoard.fulfilled, (state, action) => {
                state.status = 'idle';  // 글 목록 이동 시 목록 재조회를 위한,,
                state.boards.push(action.payload);
                state.error = null;
            })
            .addCase(createBoard.rejected, (state, action) => {
                // state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateBoard.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateBoard.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const index = state.boards.findIndex(board => board.id === action.payload.id);
                if(index !== -1){
                    state.boards[index] = action.payload;
                } else {
                    state.currentBoard = action.payload;
                }
            })
            .addCase(updateBoard.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
        ;
    },
});

export const { clearSelectedBoard } = boardSlice.actions;
export default boardSlice.reducer;