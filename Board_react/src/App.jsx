import './App.css';
import { useReducer, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Notfound from './pages/NotFound';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    title: "첫번째 게시글",
    content: "첫번째 게시글 내용",
    writer: "홍길동",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    title: "두번째 게시글",
    content: "두번째 게시글 내용",
    writer: "한석봉",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    title: "세번째 게시글",
    content: "세번째 게시글 내용",
    writer: "정약용",
  },
]


function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onRest = (createdDate, title, content, wrtier) => {
    dispatch({
      type: "REGIST",
      data: {
        id: idRef++,
        createdDate,
        title,
        content,
        writer,
      }
    })
  }

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
