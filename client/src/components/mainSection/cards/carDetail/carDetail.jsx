import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CARD_DETAIL_STATE, cardDetailSelect } from "../../../../redux/actions";
import style from "./carDetail.module.css";
import CardActivity from "../cardActivity/cardActivity";

export default function CardDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const cardDetailRender = useSelector((state) => state.cardDetailState);
    
    const getActivities = useSelector((state) => state.getActivities);
        
    useEffect(() => {
        dispatch(cardDetailSelect(id))
       return ()=> dispatch({ type: CARD_DETAIL_STATE, payload :  [] })

    }, [id]  );

    return (
        <div className={style.containerDetails}>
            <div className={style.one}>
                <img src={cardDetailRender?.flag || "-"} className={style.flagCountry} alt="Bandera" />
                <h2 className={style.countryName}>{cardDetailRender?.name || "-"}</h2>
                <NavLink to="/home" className={style.backButton}>Back</NavLink>
            </div>
            <div className={style.two}>
                <h4 className={style.key}>{cardDetailRender?.id || "-"}</h4>
            </div>
            <div className={style.three}>
                <h4 className={style.population}>Population: <br /> {cardDetailRender?.population || "-"} Habitantes.</h4>
            </div>
            <div className={style.four}>
                <h4 className={style.capital}>Capital: <br /> {cardDetailRender?.capital || "-"} </h4>
            </div>
            <h2 className={style.five}>ACTIVITIES</h2>
            <div className={style.six} >
                 {getActivities.map(activity => (
                <CardActivity className={style.cardActivity} key={activity.id} activity={activity} />
            ))}
             
            </div>
            
            <div className={style.seven}>
                <h4 className={style.seven}>Continent: {cardDetailRender?.continent || "-"}</h4>
                <h4 className={style.seven}>Area: {cardDetailRender?.area || "-"} Kilometros.</h4>
                <h4 className={style.seven}>Subregion: {cardDetailRender?.subregion || "-"}</h4>
                <NavLink className={style.backButtonCreate}  to="/create/Activity" > CREATE </NavLink>
            </div>
        </div>
    );
}
