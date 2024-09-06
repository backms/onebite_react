import './App.css';
import { useReducer, useRef, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import Notfound from './pages/NotFound';
import Regist from "./pages/Regist.jsx";

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

function reducer(state, action) {
  switch(action.type){
    case 'REGIST':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => {
        String(item.id) === String(action.data.id)
        ? action.data
        : item
      });
    case 'DELETE':
      return state.filter((item) => {
        String(item.id) !== String(action.id)
      });
    default:
      return state;
  }
}

export const BoardStateContext = createContext();    // 상태관리용 context
export const BoardDispatchContext = createContext(); // dispatch용 context

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  const onRegist = (createdDate, title, content, writer) => {
    dispatch({
      type: "REGIST",
      data: {
        id: idRef.current++,
        createdDate,
        title,
        content,
        writer,
      }
    })
  }

  const onUpdate = (id, createdDate, title, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id, createdDate, title, content
      }
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  return (
    <>
      <BoardStateContext.Provider value={data}>
        <BoardDispatchContext.Provider value={{onRegist, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/regist" element={ <Regist />} />
            <Route path="/detail/:id" element={ <Detail /> } />
            <Route path="/edit/:id" element={ <Edit /> } />
            <Route path="*" element={ <Notfound /> } />
          </Routes>
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    </>
  )
}

export default App
