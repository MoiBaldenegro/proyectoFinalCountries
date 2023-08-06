//////// DEPENDENCIES ///////////////

//////// COMPONENTS /////////////////
import Card from "./card/card";
//////// STYLES /////////////////////
import style from "./cards.module.css";

// ultima version
export default function Cards({allCountries}){
    
    return(
            <div>
                {allCountries?.map((country) => <Card key={country.id} country={country}/> )}   
            </div>
    )
            

    
    
};