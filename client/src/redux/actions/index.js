import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CONTINENT = "GET_CONTINENT";

export default function getCountries(){
    return async function(dispatch){
        const { data } = await axios("http://localhost:3001/countries");
        return dispatch({type: GET_COUNTRIES, payload: data});
    }
    
};
export function getContinent(continent){
    return async function(dispatch){
        const { data } = await axios(`http://localhost:3001/countries/${continent}`);
        return dispatch({type: GET_CONTINENT, payload: data});
    }
    
};

