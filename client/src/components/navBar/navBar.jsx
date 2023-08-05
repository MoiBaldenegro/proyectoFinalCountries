//////// DEPENDENCIES ///////////////

//////// COMPONENTS /////////////////


//////// STYLES /////////////////////
import style from "./navBar.module.css";




export default function NavBar({handleChange, handleSubmit}){
     
    
    return(
        <div>
            <form >
                <input type="text" placeholder="Search" onChange={handleChange} />
                <button type="button" onClick={handleSubmit} > Search </button>
            </form>
        </div>
    )
};
