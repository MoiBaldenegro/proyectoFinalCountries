import React from "react";
import style from "./cardActivity.module.css"

export default function CardActivity({ activity }) {
    return (
        <div className={style.cardActivityContainer}>
            <div key={activity.id}>
                <h2> {activity.name}</h2>
                <h2> Difficulty: {activity.difficulty} </h2>
                <h2>{activity.duration} Hrs </h2>
                <h2>Seasons:</h2>
                <ul>
                    {activity.season.map((season, index) => (
                        <li key={index}>{season}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
