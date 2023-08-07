import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CONTINENT = "GET_CONTINENT";
export const COUNTRIES_PAGINATION = "COUNTRIES_PAGINATION";
export const PAGINATION_ON_OFF = "PAGINATION_ON_OFF";
export const PAGINATION_ACTIVE = "PAGINATION_ACTIVE";
export const RETURN_TO_ALL = "RETURN_TO_ALL";

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

export function postActivity(activity){
    return async function(dispatch){
        try {
            const response = await axios.post("http://localhost:3001/activities", activity)
            alert(" El usuario se ha acreado con exito mi rey")   
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};



/*
export function pagination (countriesLimit){
    return async function(dispatch){
        try {

            
        } catch (error) {
            
        }
    };
}; */

export function switchPageOnAction(){
    return async function(dispatch){
        return dispatch({ type : PAGINATION_ON_OFF, payload : "continentFilterOn"});
    };
};

export function switchPreviousPage(){
    return async function(dispatch){
        return dispatch({ type : PAGINATION_ACTIVE, payload : "PaginationOn"});
    };
};
export function returnToAllOn(){
    return async function(dispatch){
        return dispatch({ type: RETURN_TO_ALL, payload: "allOn"})
    };
};


