import style from "./loginPage.module.css"
import { useEffect, useState } from "react"
import validation from "./validation";
import {useNavigate, useLocation, NavLink} from "react-router-dom"
import { useDispatch } from "react-redux";
import { setAccess } from "../../redux/actions";
import x from "../../assets/error.png"
export default function LoginPage(props){
    const [ loginData, setLoginData] = useState({
        email : "",
        password :  ""
 });


    ////////////////////ACESSO DE LOGIN /////////////7
    //////////////////////////////////////////////////
    const dispatch = useDispatch();

     const user = ["moises@gmail.com", "123456"]
     const navigate = useNavigate();

     function login(userData){
        if( userData.email === user[0] && userData.password === user[1]){
            dispatch(setAccess(true))
            navigate("/home");
        } else (alert("the username or password is incorrect"))
        
     }

     function handleSubmit(event){
        event.preventDefault(event);
        login(loginData);
     }
    ///////////////////////////////////////////////////7
    ///////////////////////////////////////////////7
   

    const [ errorsForm, setErrorsForm ] = useState({});

function handleChange(event){
    const { name, value } = event.target;

     setLoginData({
        ...loginData,
        [name] : value
    },
    setErrorsForm(validation({ 
        ...loginData,
        [name] : value
     }))
    
    );

    
  
}

    return(
        <div className={style.component}>
                <div className={style.loginBox}>
                    <h2 className={style.tittle}> <b className={style.G}>S</b>IGN <b className={style.G}>I</b>N </h2>
                    <form action=""  onSubmit={handleSubmit}>
                        <div className={style.userBox}>
                            <input type="text"
                            placeholder="Email"
                            className={style.inputUserBox}
                            name="email"
                            value={loginData.email} 
                            onChange={handleChange} />
                        </div>
                        <div className={style.userBox}>
                            <input type="password" 
                            placeholder="Password"
                            name="password"
                            value={loginData.password}
                            onChange={handleChange} 
                            className={style.inputUserBox}/>
                        </div>
                        <div className={style.divButton}>
                         <button className={style.loginButton} type="submit">Login </button>
                            
                        </div>
                        
                        
                        

                        <div className={style.errors}>
                        
                        {errorsForm.email ? (
                            <span>
                                <img className={style.errorImg} src={x} alt="" />
                                {errorsForm.email}
                            </span>
                            ) : null}
                            <br />
                             {errorsForm.password ? (
                            <span>
                                <img className={style.errorImg} src={x} alt="" />
                                {errorsForm.password}
                            </span>
                            ) : null}
                        </div>
                    </form>
                    <span className={style.textArea}>
                        Check information from various countries, learn about activities to do in them or <b> create your own activities </b> for the community. 
                    </span> 
            </div>
            <div className={style.description} >
                <h2 className={style.tittleGlobe}> <b className={style.G}>G</b>LOBE <b className={style.V}>V</b>ERSE </h2>
                <span className={style.textDescription}>
                    Welcome to my website! Join us to explore and learn about cultures and countries
                    around the world. Create your account now and immerse yourself in a 
                    journey or full of information about countries, flags and unique activities!
                </span><br />
                <div>
                    <NavLink className={style.createAccount} to={"/create/account"}> Create account </NavLink>
                </div>
                
            </div>  
           
        </div>

    )
};