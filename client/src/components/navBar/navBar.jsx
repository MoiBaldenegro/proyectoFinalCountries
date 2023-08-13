//////// DEPENDENCIES ///////////////
import { useDispatch, useSelector } from "react-redux";

//////// COMPONENTS /////////////////


//////// STYLES /////////////////////
import style from "./navBar.module.css";

/////// ACTIONS ////////////////////7
import { switchPageOnAction, handleOrderPopulation } from "../../redux/actions/index";



export default function NavBar({handleChange, handleSubmit, handleContinent}){
    const dispatch = useDispatch();



 function handleChangeOrder(order){
    dispatch(handleOrderPopulation(order))
 }
    /////////////////////////////////////////////////////////77
    ////// FILTRADO MASTER /////////////////////////////////
    ////////////////////////////////////////////////////////////

    //const  masterFilterValue = useSelector((state)=> {state.allCountries})
   // const FilteredData = masterFilterValue.filter((country) => { 
    //                let meetsConditions = true;

                    
   // })

//function testing(masterFilterValue){
   // alert(masterFilterValue)
//}
/*<button onClick={function(){
    testing(masterFilterValue)
}}> TESTING </button>
*/

    ////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////7


    function FilterOrPagination(event){
        dispatch(switchPageOnAction());
       
    }
   const continentsValues = ["Africa", "Europe", "North America", "South America", "Oceania" /*"All countries"*/];

   function shotFunction(value){
    FilterOrPagination();
    handleContinent(value)
   };

    return(
        <div className={style.searchBar}>
            <div>
                <form action="">
                    <label htmlFor="">
                        <input type="radio" name="page"/>
                    </label>
                    <label htmlFor="">
                        
                        <input type="radio"name="view" />
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="view" />
                    </label>
                    <div>
                        <h4> Population order </h4>
                        <select name=" " id="" onChange={handleChangeOrder}>
                            <option value="none">  NONE  </option>
                            <option value="D"> Major  »  Minor </option>
                            <option value="A"> Minor  »  Major </option>    
                        </select>
                        <h4> Alphabetic Order </h4>
                        <select name="" id="">
                            <option value="none">  NONE  </option>
                            <option value="ascend"> A  »  Z </option>
                            <option value="descend"> Z  »  A </option>
                        </select>
                    </div>
                </form>
            </div>
            <form >
                <input type="search" placeholder="Country Name" onChange={handleChange} />
                <button type="button" onClick={handleSubmit} > Search </button>
            </form>
            <div>
                {continentsValues.map((value, index) => (
                <button key={index} onClick={() => shotFunction(value)}> {value} </button>
                ))}
            </div>
            
        </div>
    )
};


