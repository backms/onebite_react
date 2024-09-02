import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Notfound from './pages/NotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/detail/:id" element={ <Detail /> } />
        <Route path="/edit/:id" element={ <Edit /> } />
        <Route path="*" element={ <Notfound /> } />
      </Routes>
    </>
  )
}

export default App
