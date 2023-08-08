/////////// DEPENDENCIES //////////////////
import { Routes, Route, useNavigate, useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


/////////// COMPONENTS ///////////////////
import  Home  from "../src/pages/home/home";
import Detail from "./pages/detail/detail";
import CreateActivity from './pages/createActivity/createActivity';
import LandingPage from './pages/landing/landing';
import LoginPage from "./pages/loginPage/loginPage";
/////////// STYLES ///////////////////////
import './App.css';


function App() {
 const location = useLocation();
 const navigate = useNavigate();
 const access = useSelector((state) => state.accessLog)
  
 useEffect(()=>{
  if(!access && location.pathname !== "/" ) {
    navigate("/login");
  } 
}, [access])

  return (
    <>
    
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path="/createActivity" element={<CreateActivity/>} />
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={ <LoginPage/>} />
      </Routes>
    </> 
    
  )
}

export default App
