import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header.jsx";
import BoardList from "./features/board/BoardList.jsx";
import Home from "./components/Home.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import BoardForm from "./features/board/BoardForm.jsx";
import BoardDetail from "./features/board/BoardDetail.jsx";
import BoardEdit from "./features/board/BoardEdit.jsx";

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/board" element={ <BoardList /> } />
                <Route path="/boardDetail/:boardId" element={ <BoardDetail /> } />
                <Route path="/boardEdit/:boardId" element={ <BoardEdit /> } />
                <Route path="/boardForm" element={ <BoardForm /> } />
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </Provider>
    )
}

export default App