import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Example from "./components/Example.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
