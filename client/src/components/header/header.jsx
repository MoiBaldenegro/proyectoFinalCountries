//////// DEPENDENCIES ///////////////
import { Link } from "react-router-dom";

//////// COMPONENTS /////////////////

//////// STYLES /////////////////////
import style from "./header.module.css";




export default function Header(){
    return(
        <div className={style.header}>
            <Link to="/favorites">--  Favorites ⭐ --  </Link>
            <Link to="/home">  Home 🧿 --  </Link>
            <Link to="/activities">  Activities ✈ --  </Link>
            <Link to="/contact">  Contact 📞 --  </Link>    
        </div>
    )
}