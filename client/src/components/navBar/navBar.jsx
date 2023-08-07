//////// DEPENDENCIES ///////////////
import { useDispatch } from "react-redux";

//////// COMPONENTS /////////////////


//////// STYLES /////////////////////
import style from "./navBar.module.css";

/////// ACTIONS ////////////////////7
import { switchPageOnAction } from "../../redux/actions/index";



export default function NavBar({handleChange, handleSubmit, handleContinent}){

    const dispatch = useDispatch();

    function FilterOrPagination(event){
        dispatch(switchPageOnAction());
       
    }
   const continentsValues = ["Africa", "Europe", "North America", "South America", "Oceania"];

   function shotFunction(value){
    console.log(value);
    FilterOrPagination();
    handleContinent(value)
   };

    return(
        <div>
            <form >
                <input type="text" placeholder="Search" onChange={handleChange} />
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


