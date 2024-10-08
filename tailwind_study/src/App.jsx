import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Board from "./pages/Board";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header.jsx";

function App() {

  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={ <Board/> } />
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </>
  )
}

export default App
