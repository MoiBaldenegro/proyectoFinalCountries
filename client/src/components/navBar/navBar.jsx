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
   const continentsValues = ["Africa", "Europe", "North America", "South America", "Oceania","Antarctica"];

   function shotFunction(value){
    FilterOrPagination();
    handleContinent(value)
   };

    return(
        <div className={style.searchBar}>
                
                    <div className={style.ordered} >
                        <div className={style.order}>
                            <h4 className={style.orderPopulation} > Population order </h4>
                            <select name=" " id="" onChange={handleChangeOrder}>
                                <option value="none">  NONE  </option>
                                <option value="D"> Major  »  Minor </option>
                                <option value="A"> Minor  »  Major </option>    
                            </select>
                             
                        </div>
                        <div className={style.order}>
                            <h4 className={style.orderPopulation} > Alphabetic Order </h4> 
                            <select name="" id="">
                                <option value="none">  NONE  </option>
                                <option value="ascend"> A  »  Z </option>
                                <option value="descend"> Z  »  A </option>
                            </select>
                        </div>
                       
                        
                    </div>
            <form  className={style.Bar}>
                <input className={style.search} type="search" placeholder="Country Name" onChange={handleChange} />
                <button type="button" onClick={handleSubmit} > Search </button>
            </form>
            <div className={style.continentContainer} >
                {continentsValues.map((value, index) => (
                <button className={style.continentFilter} key={index} onClick={() => shotFunction(value)}> {value} </button>
                ))}
            </div>
            
        </div>
    )
};


