////////// DEPENDENCIES /////////////////////
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

////////// COMPONENTS /////////////////////////////////////
import Header from "../../components/header/header";
import NavBar from "../../components/navBar/navBar";
import Aside from "../../components/aside/aside";
import MainSection from "../../components/mainSection/mainSection";
import Footer from "../../components/footer/footer";

////////// ACTIONS AND FUNCTIONS ///////////////////////////
import  getCountries from "../../redux/actions/index.js";
import { returnToAllOn } from "../../redux/actions/index.js";
import { replacePagination } from "../../redux/actions/index.js";

////////// STYLES ///////////////////////////
import  style  from "./home.module.css";


export default function Home(){

    const dispatch = useDispatch(); 
    const allCountries = useSelector((state) => state.allCountries);

    const [searchText, setSearchText ] =  useState("");
    const [searchContinent, setSearchContinent ]= useState([]);


    // Filtered by name in real time
    const countryfilter = allCountries.filter((country) => 
    country.name.includes(searchText));

    function handleChange(event){
        event.preventDefault();
        setSearchText(event.target.value);  
    };
    
    //  filtered by continents //
    /* continent filter is an array of objects,of the countries
     that match the continent that I want to filter */
    const continentFilter = allCountries.filter((country) => 
    country.continent === searchContinent);

    function handleContinent(continent){
        setSearchContinent(continent);
    };
    
    
     function handleSubmit(event){
        event.preventDefault();
        alert(allCountries.length)

        dispatch(getCountries());
        dispatch(returnToAllOn());
    };

    //////////////////////////////////////////////////////////////////
    //////////////////// COUNTRIES PAGINATION ////////////////////////
    //////////////////////////////////////////////////////////////////
    const countriesPerPage = 10;
    const [ countriesPage, setCountriesPage ] = useState([ ...allCountries ].splice(countriesPerPage));
    const [ actuallyPage, setActuallyPage ] =  useState(0); 

    function nextPage(){
      const next_page = actuallyPage + 1;
      const indexPage = next_page * countriesPerPage;
      if(indexPage >= allCountries.length) return; 
      setCountriesPage([ ...allCountries].splice(indexPage, countriesPerPage));
      setActuallyPage(next_page);

    };
    function previousPage(){
       const previous_page = actuallyPage - 1;
       if (previous_page < 0) return;
       const indexPage = previous_page * countriesPerPage;
       if(allCountries.length <= 0) return;
       setCountriesPage([ ...allCountries].splice(indexPage,countriesPerPage ));
       setActuallyPage(previous_page);
    };

    // Pagination per button page
    const pagesFilter = allCountries.slice(0, countriesPerPage);
    function pageFiltered(){
        dispatch(replacePagination(pagesFilter));
    };



    //////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////

    useEffect(()=>{
        dispatch(getCountries())
        /* return (()=>{
            clearCountries();
        };*/   
    }, [dispatch]);

    // update immediately after creating a country
    /* useEffect(()=>{
        dispatch(getCountries()) 
    }, [allCountries]);*/

        return (
            <div className={style.home}>
                <div className={style.grid}>
                    <h1 className={style.banner}> BANNER DE BIENVENIDA </h1>
                    <Header className={style.header}/>
                    <NavBar handleChange={handleChange} 
                            handleSubmit={handleSubmit}
                         handleContinent={handleContinent} />
                    <Aside/>
                    <MainSection allCountries={countryfilter} 
                                countriesPage={countriesPage}
                              continentFilter={continentFilter}
                                  pagesFilter={pagesFilter}
                                 pageFiltered={pageFiltered}
                                     nextPage={nextPage} 
                                 previousPage={previousPage} />
                    <Footer/> 

                </div>
                 
            </div>
        );
};