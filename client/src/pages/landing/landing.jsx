import style from "./landing.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default class Landing extends React.Component{
    constructor(props){
        super(props)
    }
    
        render(){
            return(
                <div>
                    <h1> LANDING PAGE </h1>
                     <NavLink to="/login"> Iniciar </NavLink>
                    
                </div>
            );
        };
    
};