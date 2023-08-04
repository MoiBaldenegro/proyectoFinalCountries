////////// DEPENDENCIES /////////////////////
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////////// COMPONENTS /////////////////////
import Header from "../../components/header/header";
import NavBar from "../../components/navBar/navBar";
import Aside from "../../components/aside/aside";
import MainSection from "../../components/mainSection/mainSection";
import Footer from "../../components/footer/footer";

////////// ACTIONS ///////////////////////////
import getCountries from "../redux/actions/index.js";

////////// STYLES ///////////////////////////
import  style  from "./home.module.css";


const dispatch = useDispatch();
const allCountries = useSelector((state) => state.allCountries);

useEffect(()=>{
    dispatch(getCountries())
     /* return (()=>{
        clearCountries();
    };*/
        
    )
}, [dispatch]);

export default function Home (){

    return (
        <div>
            <h1> HOME PAGE</h1>
            <Header/>
            <NavBar/>
            <Aside/>
            <MainSection allCountries={allCountries} />
            <Footer/>  
        </div>
    )
};