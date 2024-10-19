import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header.jsx";
import BoardList from "./features/board/BoardList.jsx";
import Home from "./components/Home.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/board" element={ <BoardList /> } />
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
        </Provider>
    )
}

export default App