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
import  getCountries, { paginadoNuevo } from "../../redux/actions/index.js";
import { returnToAllOn } from "../../redux/actions/index.js";
import { replacePagination } from "../../redux/actions/index.js";

////////// STYLES ///////////////////////////
import  style  from "./home.module.css";

export default function Home(){
    const getActivities = useSelector(state => state.getActivities);
    const paginasNuevo = useSelector(state => state.paginasNuevo)



    const dispatch = useDispatch(); 
    const allCountries = useSelector((state) => state.allCountries);
    const allcontriesFilter = useSelector(state => state.allCountriesFilter);
    

    const [searchText, setSearchText ] =  useState("");
    const [searchContinent, setSearchContinent ]= useState([]);


    function handleChange(event){
        event.preventDefault();
        setSearchText(event.target.value);  
    };
    

    const filteredCoutries = (continentData)=>{
        if(typeof continentData === "string") return country => country.continent === continentData
        else return country => country 
    }
    const continentFilter = allCountries
        .filter(filteredCoutries(allcontriesFilter))
        .filter((country) =>country.name.includes(searchText)); 


    
    
/*
    function handleContinent(continent){
        setSearchContinent(continent);
    };
     */
    
     function handleSubmit(event){
        event.preventDefault();

        dispatch(getCountries());
        dispatch(returnToAllOn());
    };

   

    //////////////////////////////////////////////////////////////////
    //////////////////// COUNTRIES PAGINATION   //////////////////////
    //////////////////////////////////////////////////////////////////
    const countriesPerPage = 15;
   /* const [ countriesPage, setCountriesPage ] = useState([ ...continentFilter ].splice(countriesPerPage));
    const [ actuallyPage, setActuallyPage ] =  useState(1); 
*/
    function nextPage(){
     dispatch(paginadoNuevo(paginasNuevo + 1))

    };

    function previousPage(){
        dispatch(paginadoNuevo(paginasNuevo - 1 ))
      
    };

    const inicio = paginasNuevo * countriesPerPage;
    const final =  inicio + countriesPerPage;
    const totalDePaginas = Math.ceil(continentFilter.length / countriesPerPage);
    

    // Pagination per button page
   /* const pagesFilter = allCountries.slice(0, countriesPerPage);
    function pageFiltered(){
        dispatch(replacePagination(pagesFilter));
    }; */



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
                    <div className={style.banner}>
                        <div className={style.bannerDivs}> 
                            <h1 className={style.logoTittle}> <b className={style.acento} >G</b>LOBE <b className={style.acento}>V</b>ERSE </h1>
                        </div >
                        <div className={style.bannerDivs}>
                            <h2> WELCOME TO MY PROJECT
                            </h2>
                            <h3> Poyecto individual " Cuntries " HENRY</h3>
                            <h4> AGOSTO 2023 Cohorte FT40a </h4>
                        </div>                      
                    </div>
                    <Header className={style.header}/>
                    <NavBar handleChange={handleChange} 
                            handleSubmit={handleSubmit}
                             />
                    <MainSection allCountries={continentFilter.slice(inicio, final)} 
                                     nextPage={nextPage} 
                                     totalDePaginas={totalDePaginas}
                                 previousPage={previousPage} />

                </div>
                 
            </div>
        );
};