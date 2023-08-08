//////// DEPENDENCIES ////////////////
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//////// COMPONENTS /////////////////

//////// STYLES /////////////////////
import style from "./card.module.css";
import { cardDetailSelect } from "../../../../redux/actions";


export default function Card({country}){

    const { name, id, continent, flag} = country;
    return(
       
        <div>
             <Link to={`/detail/${id}`} >
                    <h2> Name: {name} </h2>   
                    <h4> Continent: {continent} </h4>
                    <img src={flag} alt="Bandera" />
            </Link> 
        </div>
    )
};