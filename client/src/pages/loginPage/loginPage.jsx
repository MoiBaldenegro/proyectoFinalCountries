import style from "./loginPage.module.css"
import { useEffect, useState } from "react"
import validation from "./validation";
import {useNavigate, useLocation} from "react-router-dom"
import { useDispatch } from "react-redux";
import { setAccess } from "../../redux/actions";


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
        <div>
            <div>
                <h1>LOGIN</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" 
                           placeholder="Email"
                           name="email"
                           value={loginData.email} 
                           onChange={handleChange} />
                    <input type="text" 
                           placeholder="Password"
                           name="password"
                           value={loginData.password}
                           onChange={handleChange} />
                    <button type="submit"> Login </button>
                    <button type="submit"> Create account </button>
                    <div>
                        <span>{ errorsForm.email ? errorsForm.email : null}</span> 
                        <span>{ errorsForm.password ? errorsForm.password : null}</span>
                    </div>
                </form>
                <span>
                    Check information from various countries, learn about activities to do in them or <b> create your own activities </b> for the community. 
                </span>
            </div>   
        </div>

    )
}