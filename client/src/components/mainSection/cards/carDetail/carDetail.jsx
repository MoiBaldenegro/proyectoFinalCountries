import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cardDetailSelect } from "../../../../redux/actions";



export default function CardDetail(){
    const dispatch = useDispatch();
    const { id } = useParams();

    const cardDetailRender = useSelector((state) => state.cardDetailState);
        
    useEffect(()=>{
        dispatch(cardDetailSelect(id))
    },[id]);
        
        
            return(
                <div>
                    <div>

                        h1 aca estan los detalles
                    </div>
                    <h1> estob es una card</h1>
                       <h2> Name: {cardDetailRender.name ? cardDetailRender.name : " - " } </h2>
                       <h4> Key: {cardDetailRender.id ? cardDetailRender.id : " - "} </h4>
                       <h4> Continent: {cardDetailRender.continent ? cardDetailRender.continent : " - "} </h4>
                       <h4> Capital: {cardDetailRender.capital ? cardDetailRender.capital : " - "} </h4>
                       <h4> Subregion: {cardDetailRender.subregion ? cardDetailRender.subregion : " - "} </h4>
                       <h4> Area: {cardDetailRender.area ? cardDetailRender.area : " - "} Kilometros. </h4>
                       <h4> Population: {cardDetailRender.population ? cardDetailRender.population : " - "} Habitantes.</h4>
                       <img src={cardDetailRender.flag ? cardDetailRender.flag : " - "}  alt="Bandera" />
                </div>
                );     
    };

