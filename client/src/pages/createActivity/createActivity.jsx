import { useEffect, useState} from "react";
import { useDispatch } from "react-redux";


import style from "./createActivity.module.css";
import getCountries, { getAllActivities, postActivity } from "../../redux/actions";
import { useSelector } from "react-redux";



export default function CreateActivity(){
    useEffect(()=> {
        dispatch(getCountries());
    }, []);
    const allCountries = useSelector((state)=> state.allCountries);
    
    const [ addCountry, setAddCountry] = useState(false);
    const [activity, setActivity] = useState({
        name : "",
        difficulty: "",
        duration: "",
        season: [],
        countries: []
    });
    const difficulties = ["Easy", "Intermediate", "Moderate", "Hard", "Insane"];
    const seasons = ["Spring", "Summer", "Fall", "Winter"];

    function selectCountries(){
        addCountry === false ?  setAddCountry(true) 
        : setAddCountry(false);
        
    };

function handleChangeCountries(countryName){
    const updatedCountries = activity.countries.includes(countryName)
    ? activity.countries.filter(item => item !== countryName)
    : [...activity.countries, countryName];

    setActivity({
        ...activity,
        countries: updatedCountries
    })

    }
    const handleSeasonChange = (season) => {
        const updatedSeason = activity.season.includes(season)
          ? activity.season.filter(item => item !== season)
          : [...activity.season, season];
    
        setActivity({
          ...activity,
          season: updatedSeason
        });
      };
    

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
    const dispatch = useDispatch();

    function onSubmit(event){
        event.preventDefault();
        dispatch(postActivity(activity))
        .then(getAllActivities())

    }

    function handleChange(event){
        const { name, value } = event.target;

        /*if (name === "countries") {
            const countriesArray = value.split(',').map(country => country.trim());
            setActivity({
                ...activity,
                [name]: countriesArray
            }); 
        } else {*/
            setActivity({
                ...activity,
                [name]: value
            });
        

        // Validation in real time
        validation({
            ...activity,
            [event.target.name] : event.target.value
        });
    }

    return(
        <div className={style.formActivities}>
            
            <div className={style.formContainerOne}>
                <h2 className={style.createTittleForm}> <b  className={style.G}>  C</b>REATE <b className={style.G}>A</b>CTIVITY </h2>
                    <input type="text" required
                    className={style.inputActivity}
                           name="name" 
                           onChange={handleChange} 
                           value={activity.value} 
                           placeholder=" Name activity"/>
                    <br />
            
                    <input
                            type="range"
                            required
                            name="difficulty"
                            min={1}
                            max={5}
                            step={1}
                            value={activity.value}
                            onChange={handleChange} />
                            { 
                              activity.difficulty > 0 && activity.difficulty  < 2 ? <h5 style={{ color: '#3498db', fontSize: '18px', fontWeight: 'bold' }} > {difficulties[0]} </h5> : 
                              activity.difficulty > 1 && activity.difficulty  < 3 ? <h5 style={{ color: '#27ae60', fontSize: '18px', fontWeight: 'bold' }}> {difficulties[1]} </h5> : 
                              activity.difficulty > 2 && activity.difficulty  < 4 ? <h5 style={{ color: '#f39c12', fontSize: '18px', fontWeight: 'bold' }}> {difficulties[2]} </h5> :  
                              activity.difficulty > 3 && activity.difficulty  < 5 ? <h5 style={{ color: '#e74c3c', fontSize: '18px', fontWeight: 'bold' }}> {difficulties[3]} </h5> : 
                              activity.difficulty > 4 && activity.difficulty  < 6 ? <h5 style={{ color: '#c2392b', fontSize: '18px', fontWeight: 'bold' }}> {difficulties[4]} </h5> :  null
                            }
                            <br />
                            <label> Activity time </label> <br />
                            <select className={style.buttonActivities} name="duration" id="" onChange={handleChange}>
                            {[...Array(24)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1} hours
                            </option> ))}
                            </select>
                    <br />
                    <div>
                     {seasons.map(season => (
                       <label key={season}>
                        <input className={style.seasons}
                        type="checkbox"
                        value={season}
                        checked={activity.season.includes(season)}
                        onChange={() => handleSeasonChange(season)}
                               />
                               {season}
                        </label>
                            ))}
                        </div>
                      <button className={style.buttonActivities} onClick={selectCountries}> Add countries </button>
                      <button className={style.buttonActivities}  onClick={onSubmit}> Create </button>
             <br /><br />
             <div>
                <span>{errorActivity.name}</span>
            </div>
                      
            </div>
            <div className={style.formContainerTwo}>
                               
                            {addCountry === true ? (
                                        <div  className={style.checks} >
                                            {allCountries.map((country) => (
                                            <div className={style.checkboxItem} key={country.name}>
                                                <input
                                                type="checkbox"
                                                value={country.name}
                                                checked={activity.countries.includes(country.name)}
                                                onChange={() => handleChangeCountries(country.name)}
                                                />
                                                {country.name}
                                            </div>
                                            ))}
                                        </div>
                                        ) : null}
                                    
             </div> 
            
              
                   
            
              
           
        </div>
    )
}
