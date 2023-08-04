//////// DEPENDENCIES ///////////////

//////// COMPONENTS /////////////////
import Card from "./card/card";
//////// STYLES /////////////////////
import style from "./cards.module.css";

// ultima version
export default function Cards(allCountries){
    const countriesList = allCountries;
    return(
        <div>
            {countriesList ?.map((country) => <Card country={country}/> )} 
        </div>
    )
};