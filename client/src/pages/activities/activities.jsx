import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllActivities } from "../../redux/actions";
import CardActivity from "../../components/mainSection/cards/cardActivity/cardActivity";
import style from "./activities.module.css"
import Header from "../../components/header/header"

export default function Activities(props) {
    const getActivities = useSelector(state => state.getActivities);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllActivities());
    }, [dispatch]);

    return (
        <div className={style.containerTargets}>
            <Header/>

            {getActivities.map(activity => (
                <CardActivity key={activity.id} activity={activity} />
            ))}
        </div>
    );
}
