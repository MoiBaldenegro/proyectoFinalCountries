//////// DEPENDENCIES ////////////////
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

//////// COMPONENTS /////////////////

//////// STYLES /////////////////////
import style from "./card.module.css";
import { addFavorite, deleteFavorite } from "../../../../redux/actions";


export default function Card({country}){
    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();


    function handleClick(country){
        if(!isFav){
           // dispatch(addFavorite(country))
            setIsFav(true)
        }else{ 
       // dispatch(deleteFavoriteFavorite(country))  
        setIsFav(false)};
    }
   

    const { name, id, continent, flag} = country;
    return(
       
        <div>
             <Link to={`/detail/${id}`} >
                <img src={flag} alt="Bandera" />
            </Link> 
            <h2> Name: {name} </h2>   
                    <h4> Continent: {continent} </h4>
                    { 
                        isFav ? <button onClick={handleClick}> ⭐ </button> : 
                                <button onClick={handleClick}>  ⚪  </button>

                    }
                    
                    
        </div>
    )
};