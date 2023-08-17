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
                                     nextPage, previousPage, continentFilter, countriesPage}){

    const dispatch = useDispatch();
    const paginationOnOff = useSelector((state) => state.paginationOnOff);




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
                    <button className={style.pages} onClick={shotFunction}> Previous </button>
                        {[...Array(15)].map((_, index) => (
                            <button className={style.pages} key={index + 1} onClick={() => pageFiltered(index + 1)}>
                        {index + 1}
                     </button>
      ))}
                    
                    <button className={style.pages} onClick={shotFunctionsNext}> Next page </button>
                </div>
            </div>
        );
    };
   
    


