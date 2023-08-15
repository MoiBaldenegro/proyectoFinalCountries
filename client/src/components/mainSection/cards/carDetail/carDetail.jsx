import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cardDetailSelect } from "../../../../redux/actions";
import style from "./carDetail.module.css";



export default function CardDetail(){
    const dispatch = useDispatch();
    const { id } = useParams();

    const cardDetailRender = useSelector((state) => state.cardDetailState);
        
    useEffect(()=>{
        dispatch(cardDetailSelect(id))
    },[id]);
        
        
            return(
                <div className={style.containerDetails}>
                    <div className={style.one}>
                        <img src={cardDetailRender.flag ? cardDetailRender.flag : " - "}  className={style.flagCountry} alt="Bandera" /> 
                        <h2> Name: {cardDetailRender.name ? cardDetailRender.name : " - " } </h2> 
                       
            
                    </div>
                    <div className={style.two}>
                        <h4> Key: {cardDetailRender.id ? cardDetailRender.id : " - "} </h4>
                    </div>
                    <div className={style.three}>
                       <h4> Population: {cardDetailRender.population ? cardDetailRender.population : " - "} Habitantes.</h4>    
                    </div>
                    <div className={style.four}>
                        <h4> Capital: {cardDetailRender.capital ? cardDetailRender.capital : " - "} </h4>
                       
                     </div>
                    <h2 className={style.five} > ACTIVITIES </h2>
                    <h2 className={style.six}> LISTA DE ACTIVIDADES  </h2>
                    <h2 className={style.seven}> MAPAS O LO QUE SE ME OCURRA </h2>
                    <h4 className={style.seven} > Continent: {cardDetailRender.continent ? cardDetailRender.continent : " - "} </h4>
                    <h4 className={style.seven} > Area: {cardDetailRender.area ? cardDetailRender.area : " - "} Kilometros. </h4>
                    <h4 className={style.seven} > Subregion: {cardDetailRender.subregion ? cardDetailRender.subregion : " - "} </h4>
                       
                       
                       
            
                </div>
                );     
    };

