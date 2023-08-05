//////// DEPENDENCIES ///////////////

//////// COMPONENTS /////////////////
import Cards from "./cards/cards";

//////// STYLES /////////////////////
import style from "./mainSection.module.css";



export default function MainSection({allCountries}){
    
        return(
            <div>
                <h4> Main Section </h4>
                <Cards allCountries={allCountries}/>

            </div>
        )
    };
    

