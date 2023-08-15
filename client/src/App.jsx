/////////// DEPENDENCIES //////////////////
import { Routes, Route, useNavigate, useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


/////////// COMPONENTS ///////////////////
import  Home  from "../src/pages/home/home";
import Detail from "./pages/detail/detail";
import CreateActivity from './pages/createActivity/createActivity';
import CreateAccount from "./pages/createAccount/createAccount";
import LandingPage from './pages/landing/landing';
import LoginPage from "./pages/loginPage/loginPage";
/////////// STYLES ///////////////////////
import style from './App.css';
import Favorites from "./pages/favorites/favorites";


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
    <div className={style.gridContainer}>
      
      <Routes>
            <Route path="/home" element={<Home className={style.home} />} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/create/activity" element={<CreateActivity/>} />
            <Route path="/create/account" element={<CreateAccount/>} />
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={ <LoginPage/>} />
            <Route path="/favorites" element={ <Favorites/>} />   
        </Routes>
 
    </div> 
    
  )
}

export default App
