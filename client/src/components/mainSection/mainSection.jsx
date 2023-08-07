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

    // for the next page button

    /*function dispatchActionPage(event){
        dispatch(switchPreviousPage()); 
    };*/

    function shotFunctionsNext(){
        dispatch(switchPreviousPage());
        nextPage();
    };

   

        return(
            <div>
                <h4> Main Section </h4> 
                <div>
                    <button onClick={shotFunction}> Previous </button>
                        {[...Array(10)].map((_, index) => (
                            <button key={index + 1} onClick={() => pageFiltered(index + 1)}>
                        {index + 1}
                     </button>
      ))}
                    
                    <button onClick={shotFunctionsNext}> Next page </button>
                </div>
                <div>
                    
                    {paginationOnOff === "allOn" ? <Cards allCountries={allCountries}/> : 
                     paginationOnOff === "continentFilterOn" ? <Cards allCountries={continentFilter}/> : 
                     paginationOnOff === "PaginationOn" ? <Cards allCountries={countriesPage}/> : 
                     paginationOnOff === "pageValue" ? <Cards allCountries={pagesFilter}/> : null}
                  
                   
                </div>
            </div>
        );
    };
    /*
                    <button onClick={pageFiltered}> 1 </button>
                    <button onClick={pageFiltered}> 2 </button>
                    <button onClick={pageFiltered}> 3 </button>
                    <button onClick={pageFiltered}> 4 </button>
                    <button onClick={pageFiltered}> 5 </button>
                    <button onClick={pageFiltered}> 6 </button>
                    <button onClick={pageFiltered}> 7 </button>
                    <button onClick={pageFiltered}> 8 </button>
                    <button onClick={pageFiltered}> 9 </button>
                    <button onClick={pageFiltered}> 10 </button>
        */

    


