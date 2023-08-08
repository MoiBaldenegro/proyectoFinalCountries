import CardDetail from "../../components/mainSection/cards/carDetail/carDetail";
import { useSelector } from "react-redux";
import  style  from "../detail/detail.module.css";





export default function Detail (){
   
    // AGREGAR EL USE EFFECT CON EL RETURN PARA LIMPIAR EL ESTADO GLOBAL DE LOS DETALLES

    return (
        <div>
            <h1> DETAIL PAGE</h1>
            <CardDetail/>
        </div>
    )
};