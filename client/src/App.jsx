import { useState } from 'react'
import './App.css'
import  Home  from "../src/pages/home/home";
import Detail from "./pages/detail/detail";
import CreateActivity from './pages/createActivity/createActivity';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Detail/>
      <CreateActivity/>
    </>
  )
}

export default App
