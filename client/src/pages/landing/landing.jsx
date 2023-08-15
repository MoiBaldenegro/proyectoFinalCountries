import style from "./landing.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import globe from "../../assets/globe.svg"
import videoFont from "../../assets/videoFont.mp4"

export default class Landing extends React.Component{
    constructor(props){
        super(props)
    }
    
        render(){
            return(
                <div className={style.landing}>
                    <div className={style.container}>
                        <h3 className={style.pi}> Countries PI</h3>
                        <div className={style.videoFont}>
                        <video src={videoFont} autoPlay loop ></video>
                            <h1 className={style.tittle}> GLOBE VERSE </h1>
                            

                        </div><br />
                        
                        <h4 className={style.text}>Embark on a cultural journey, explore <b> countries</b> ,
                             <b> flags and activities</b> around the world, all in one place.
                             Discover the beauty of our world</h4>

                    </div>
                    <br /> <br />
                    
                     <NavLink to="/login" className={style.button}> START </NavLink>
                     <div >
                        <img className={style.imageMap}  src={globe} alt="" /><img  />
                     </div><br /><br /><br /><br /><br />
                     <div className={style.curved}>
                        <h2 className={style.moises}> Moises Baldenegro Melendez </h2>
                        <h3 className={style.fullStack}> Full Stack Developer HENRY Agosto 2023 </h3>
                     </div>

                   
                    
                </div>
            );
        };
    
};