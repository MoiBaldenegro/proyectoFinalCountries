//////// DEPENDENCIES ///////////////

//////// COMPONENTS /////////////////

//////// STYLES /////////////////////
import style from "./card.module.css";


export default function Card({country}){
const { name, id, continent, capital, subregion, area, population, flag} = country;
    return(
        <div>
            <h2> Name: {name} </h2>
            <h4> Key: {id} </h4>
            <h4> Continent: {continent} </h4>
            <h4> Capital: {capital} </h4>
            <h4> Subregion: {subregion} </h4>
            <h4> Area {area}</h4>
            <h4> Population {population}</h4>
            <img src={flag} alt="Bandera" />
        </div>
    )
};