import style from "./createAccount.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../redux/actions";
import { NavLink } from "react-router-dom";

export default function CreateAccount() {
    const dispatch = useDispatch();
    const [account, setAccount] = useState({
        username: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        console.log(account)
        const { name, value } = event.target;
        setAccount((accountData) => ({
            ...account,
            [name]: value
        }));
    }

    function handleSubmit(account) {
        dispatch(createAccount(account))
    }

    return (
        <div className={style.container}>
            <div className={style.boxCreate} >
                <h1 className={style.tittle}> <b className={style.G}>C</b>REATE <b className={style.G}>A</b>CCOUNT </h1>
                    <input className={style.userBox}
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={account.username}
                        onChange={handleChange}
                    />
                    <br />
                    <input className={style.userBox}
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={account.email}
                        onChange={handleChange}
                    />
                    <br />
                    <input className={style.userBox}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={account.password}
                        onChange={handleChange}
                    />
                    <br />
                    <NavLink className={style.createButton} onClick={(e)=>{handleSubmit(account)}} to="/login" > Create account </NavLink>
                    
            </div>
        </div>
    );
}
;

/*
<div>
                        <span>{errorsForm.email ? errorsForm.email : null}</span>
                        <span>{errorsForm.password ? errorsForm.password : null}</span>
                    </div>
                    */