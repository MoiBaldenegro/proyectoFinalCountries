////////// DEPENDENCIES /////////////////////
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

////////// COMPONENTS /////////////////////
import Header from "../../components/header/header";
import NavBar from "../../components/navBar/navBar";
import Aside from "../../components/aside/aside";
import MainSection from "../../components/mainSection/mainSection";
import Footer from "../../components/footer/footer";

////////// ACTIONS ///////////////////////////
import getCountries, { getContinent } from "../../redux/actions/index.js";

////////// STYLES ///////////////////////////
import  style  from "./home.module.css";


export default function Home(){

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);

    const [searchText, setSearchText ] =  useState("");

    const countryfilter = allCountries.filter((country) => 
    country.name.includes(searchText)
    );
    function handleContinent(continent){
        dispatch(getContinent(continent));
    }
    
    function handleChange(event){
        event.preventDefault();
        setSearchText(event.target.value);
        
    }

     function handleSubmit(event){
        event.preventDefault(event);
        dispatch(getCountries())
     
    };

    useEffect(()=>{
        dispatch(getCountries())
        /* return (()=>{
            clearCountries();
        };*/
            
        
    }, [dispatch]);



        return (
            <div>
                <h1> HOME PAGE</h1>
                    <Header/>
                    <NavBar handleChange={handleChange} 
                            handleSubmit={handleSubmit}
                         handleContinent={handleContinent}/>
                    <Aside/>
                    <MainSection allCountries={countryfilter} 
                              />
                    <Footer/>  
            </div>
        )
};