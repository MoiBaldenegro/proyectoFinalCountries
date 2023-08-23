import { useSelector } from "react-redux";
import style from "./favorites.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from "../../components/mainSection/cards/card/card"
import Header from "../../components/header/header";




export default function Favorites(props){
    const favArray = useSelector((state)=> state.favorites)

    return(
        
        <div className={style.favorites}>
             <Header/>
            <h1> FAVORITES PAGE </h1>
             <div className={style.targets}>
                {favArray?.map((country) => <Card className={style.tarjeta} key={country.id} country={country}/> )}   
            </div>
        </div>
    )
};