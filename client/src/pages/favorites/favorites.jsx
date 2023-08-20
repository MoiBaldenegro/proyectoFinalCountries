import { useSelector } from "react-redux";
import style from "./favorites.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/mainSection/cards/card/card"




export default function Favorites(props){
    const favArray = useSelector((state)=> state.favorites)

    return(
        
        <div className={style.favorites}>
            <h1> FAVORITES PAGE </h1>
             <div>
                {favArray?.map((country) => <Card key={country.id} country={country}/> )}   
            </div>
        </div>
    )
};