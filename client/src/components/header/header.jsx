//////// DEPENDENCIES ///////////////
import { Link } from "react-router-dom";

//////// COMPONENTS /////////////////

//////// STYLES /////////////////////
import style from "./header.module.css";




export default function Header(){
    return(
        <div className={style.header}>
            <Link  className={style.navigation}  to="/favorites">Favorites ⭐</Link>
            <Link className={style.navigation} to="/home">  Home 🧿</Link>
            <Link className={style.navigation} to="/activities"> Activities ✈ </Link>
            <Link className={style.navigation} to="/contact"> Contact 📞 </Link>    
        </div>
    )
}