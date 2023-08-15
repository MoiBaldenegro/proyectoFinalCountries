//////// DEPENDENCIES ////////////////
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";


//////// COMPONENTS /////////////////

//////// STYLES /////////////////////
import style from "./card.module.css";
import { addFavorite, deleteFavorite } from "../../../../redux/actions";


export default function Card({country}){
    const { name, id, continent, flag} = country;
    const favorites = useSelector((state)=> state.favorites);

    useEffect(()=>{
        favorites.forEach((country)=>{
            if(country.id === id){
                setIsFav(true);
            }
        })
    }, [favorites]);



    const [isFav, setIsFav] = useState(false);
    const dispatch = useDispatch();


    function handleClick(country){
        if(isFav === false){
           dispatch(addFavorite(country))
            setIsFav(true)
        } else{ 
        (isFav === true) 
        dispatch(deleteFavorite(country.id))  
        setIsFav(false)};
    }
   

    
    return(
       
        <div className={style.card}>
            <div className={style.shadow}>
                <NavLink to={`/detail/${id}`}  >
                    <img src={flag} alt="Bandera" className={style.flag} />
                </NavLink> 
                <h2 className={style.name}> {name} </h2>   
                        <h4 className={style.continent}>  {continent} </h4>
                        { 
                            isFav ? <button  className={style.favButton} onClick={()=>{ handleClick(country)}}> ⭐ </button> : 
                                    <button  className={style.favButton} onClick={()=>{ handleClick(country)}}>  ⚪  </button>

                        }
                        
            </div>
             
                    
        </div>
    )
};