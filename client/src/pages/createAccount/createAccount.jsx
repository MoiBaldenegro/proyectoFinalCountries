import style from "./createAccount.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../redux/actions";

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

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(createAccount(account))
    }

    return (
        <div>
            <div>
                <h1> CREATE ACCOUNT </h1>
                <form action="">
                    <input
                        placeholder="Username"
                        type="text"
                        name="username"
                        value={account.username}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={account.email}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={account.password}
                        onChange={handleChange}
                    />
                    <br />
                    <button type="submit">Login</button>
                    <button onClick={handleSubmit}>Create account</button>
                    
                </form>
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