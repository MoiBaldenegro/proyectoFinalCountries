//////// DEPENDENCIES ///////////////
import { useDispatch, useSelector } from "react-redux";
import { setContinentFilter } from "../../redux/actions/index";
import { setOrder, setOrderPopulation } from "../../redux/actions/index";

//////// COMPONENTS /////////////////


//////// STYLES /////////////////////
import style from "./navBar.module.css";

/////// ACTIONS ////////////////////7
import { switchPageOnAction, handleOrderPopulation } from "../../redux/actions/index";

 


export default function NavBar({handleChange, handleSubmit, handleContinent}){
    const dispatch = useDispatch();
     const allCountries = useSelector(state => state.allCountries);

  function handleChangeOrder(order){
    if(order === "ascend"){
        const countriesOrder = allCountries.sort((a, b) => a.name.localeCompare(b.name));
        dispatch(setOrder(countriesOrder));

    }
    if(order === "descend"){ 
        const countriesOrder = allCountries.sort((a, b) => b.name.localeCompare(a.name))
        dispatch(setOrder(countriesOrder))
    }
    return allCountries
}
    function handleOrderByPopulation(populationOrder){
        
        console.log(populationOrder);
            
            let populationCountriesOrdered = [...allCountries]; 
            
            if (populationOrder === "A") {
                populationCountriesOrdered.sort((a, b) => parseInt(a.population) - parseInt(b.population));
            }
            
            if (populationOrder === "D") {
                populationCountriesOrdered.sort((a, b) => parseInt(b.population) - parseInt(a.population));
            }

            dispatch(setOrderPopulation(populationCountriesOrdered));
            console.log(populationCountriesOrdered);
            
            return populationCountriesOrdered;
                    
    }
    
    function FilterOrPagination(event){
        dispatch(switchPageOnAction());
       
    }
   const continentsValues = ["Africa", "Europe", "North America", "South America", "Oceania","Antarctica"];

   function shotFunction(value){
    FilterOrPagination();
    dispatch(setContinentFilter(value));h

   };


    return(
        <div className={style.searchBar}>
                
                    <div className={style.ordered} >
                        <div className={style.order}>
                            <h4 className={style.orderPopulation} > Population <br /> order </h4>
                            <select name=" " id="" onChange={(e)=>{handleOrderByPopulation(e.target.value)}}>
                                <option value="none">  NONE  </option>
                                <option value="D"> Major  »  Minor </option>
                                <option value="A"> Minor  »  Major </option>    
                            </select>    
                        </div>
                        <div className={style.order}>
                            <h4 className={style.orderPopulation} > Alphabetic Order </h4> 
                            <select name="" id="" onChange={(e)=>{handleChangeOrder(e.target.value)}}>
                                <option value="none">  NONE  </option>
                                <option value="ascend"> A  »  Z </option>
                                <option value="descend"> Z  »  A </option>
                            </select>
                        </div>    
                    </div>
            <form  className={style.Bar}>
                <input className={style.search} type="search" placeholder="Country Name" onChange={handleChange} />
                <button className={style.buttonSearch}  type="button" onClick={handleSubmit} > Search </button>
            </form>
            <div className={style.continentContainer} >
                {continentsValues.map((value, index) => (
                <button className={style.continentFilter} key={index} onClick={() => shotFunction(value)}> {value} </button>
                ))}
            </div>
            
        </div>
    )
};