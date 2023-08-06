//////// DEPENDENCIES ///////////////

//////// COMPONENTS /////////////////


//////// STYLES /////////////////////
import style from "./navBar.module.css";




export default function NavBar({handleChange, handleSubmit, handleContinent}){
     
    
    return(
        <div>
            <form >
                <input type="text" placeholder="Search" onChange={handleChange} />
                <button type="button" onClick={handleSubmit} > Search </button>
            </form>
            <div>
                    <button  onClick={function(){handleContinent("Africa")}}> Africa </button>
                    <button  onClick={function(){handleContinent("Europe")}}> Europe </button>
                    <button  onClick={function(){handleContinent("North America")}}> North America </button>
                    <button  onClick={function(){handleContinent("South America")}}> South America </button>
                    <button  onClick={function(){handleContinent("Oceania")}}> Oceania </button>
                     
                </div>
        </div>
    )
};
