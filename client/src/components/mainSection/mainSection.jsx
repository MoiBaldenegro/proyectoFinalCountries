//////// DEPENDENCIES ///////////////
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//////// COMPONENTS /////////////////
import Cards from "./cards/cards";

//////// STYLES /////////////////////
import style from "./mainSection.module.css";
import getCountries from "../../redux/actions/index";

/////// ACTIONS  //////////////////////
import { switchPreviousPage } from "../../redux/actions/index";



export default function MainSection({allCountries, pagesFilter, pageFiltered, 
                                     nextPage, previousPage, totalDePaginas}){

    const paginasNuevo =  useSelector(state => state.paginasNuevo)
    const dispatch = useDispatch();




    // for the previous page button
    function dispatchActionPage(event){
        dispatch(switchPreviousPage()); 
    };

    function shotFunction(){
        dispatchActionPage();
        previousPage()
    };


    function shotFunctionsNext(){
        dispatch(switchPreviousPage());
        nextPage();
    };

   

        return(
            <div className={style.mainSection}>
                <div className={style.cardsContainer}>
                     <Cards allCountries={allCountries}/>    
                </div>
                <div>
                    <button className={style.pages} disabled={paginasNuevo === 0} onClick={shotFunction}> Previous </button>

                              <span className={style.pages}> {paginasNuevo + 1} </span>
                    
                    <button className={style.pages} disabled={paginasNuevo === totalDePaginas - 1 } onClick={shotFunctionsNext}> Next page </button>
                </div>
            </div>
        );
    };
   
    


