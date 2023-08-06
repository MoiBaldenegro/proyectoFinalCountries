import { useState} from "react";

import style from "./createActivity.module.css";



export default function CreateActivity(){
    const [activity, setActivity] = useState({
        name : "",
        difficulty: "",
        duration: "",
        season: ""
    });

    const [errorActivity, setErrorActvity] = useState({
        name : "",
        difficulty: "",
        duration: "",
        season: ""
    });


    

    const nameActivityRegex = /^[a-zA-Z0-9\s-']{1,50}$/;
    
    // Validation function
    const validation = (activity) => {

        // Name activity validation
        if(!nameActivityRegex.test(activity.name)){
                setErrorActvity({
                    ...errorActivity,
                    name : "The name of the activity is not valid my king 😕"
                });  
                return
            };
        setErrorActvity({
            ...activity,
            name : ""
        });
    };

    function handleChange(event){
        setActivity({
            ...activity,
            [event.target.name] : event.target.value
        });

        // Validation in real time
        validation({
            ...activity,
            [event.target.name] : event.target.value
        });

    }

    return(
        <div>
            <form action="" onSubmit={""}>
                <h2> CREATE ACTIVITY </h2>
                    <input type="text" required
                           name="name" 
                           onChange={handleChange} 
                           value={activity.value} 
                           placeholder=" Name activity"/>
                    <br />
                    <input type="text" required
                           name="difficulty"  
                           onChange={handleChange} 
                           value={activity.value} 
                           placeholder=" Difficulty"/>
                    <br />
                    <input type="text" required
                           name="duration"
                           onChange={handleChange} 
                           value={activity.value} 
                           placeholder=" Duration"/>
                    <br />
                    <input type="text" required
                           name="seson"  
                           onChange={handleChange} 
                           value={activity.value} 
                           placeholder=" Season Activity"/><br /><br />
                <button> Create </button>
            </form>
            <br /><br />
            <div>
                <span>{errorActivity.name}</span>
            </div>
        </div>
    )
}
