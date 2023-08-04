/////////// DEPENDENCIES //////////////////
import { Routes, Route} from "react-router-dom";
import { useState } from 'react';


/////////// COMPONENTS ///////////////////
import  Home  from "../src/pages/home/home";
import Detail from "./pages/detail/detail";
import CreateActivity from './pages/createActivity/createActivity';
import LandingPage from './pages/landing/landing';

/////////// STYLES ///////////////////////
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/createActivity" element={<CreateActivity/>} />
          <Route path="/" element={<LandingPage/>} />
      </Routes>
    </> 
    
  )
}

export default App
