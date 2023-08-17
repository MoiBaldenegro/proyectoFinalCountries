import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_CONTINENT = "GET_CONTINENT";
export const COUNTRIES_PAGINATION = "COUNTRIES_PAGINATION";
export const PAGINATION_ON_OFF = "PAGINATION_ON_OFF";
export const PAGINATION_ACTIVE = "PAGINATION_ACTIVE";
export const RETURN_TO_ALL = "RETURN_TO_ALL";
export const REPLACE_PAGINATION =  "REPLACE_PAGINATION";
export const CARD_DETAIL_STATE = " CARD_DETAIL_STATE";
export const SET_ACCES = "SET_ACCES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const MASTER_FILTER = "MASTER_FILTER";
export const ORDER_POPULATION = "ORDER POPULATION"
export const SET_CONTINENT_FILTER = "SET_CONTINENT_FILTER";
export const SET_ORDER_ALPHABETIC = "SET_CONTINENT_FILTER";
export const SET_POPULATION_ORDER = "SET_POPULATION_ORDER";
export const GET_ACTIVITIES = "GET_ACTIVITIES"

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
    console.log(activity)
    return async function(dispatch){
        try {
            const response = await axios.post("http://localhost:3001/activities/create", activity)
            alert(" actividad creada se ha acreado con exito mi rey")   
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};


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
export function replacePagination(value){
    return async function(dispatch){
        return dispatch({ type: REPLACE_PAGINATION, payload: value})

    };

};

export function cardDetailSelect(id){
    return async function(dispatch){
        try {
            const { data } = await axios(`http://localhost:3001/countries/${id}`);
            return dispatch({ type: CARD_DETAIL_STATE, payload : data })  
        } catch (error) {
            console.log({error: error.message});
        };
    };
};

export function setAccess(value){
    return async function(dispatch){
        return dispatch({ type : SET_ACCES, payload : value})
    };
};
export function addFavorite(country){
    return async function(dispatch){
        return dispatch({ type : ADD_FAVORITE, payload : country})
    };
};

export function deleteFavorite(id){
    return async function(dispatch){
        return dispatch({type : DELETE_FAVORITE, payload : id});
    };
};

export function handleOrderPopulation(order){
    return async function(dispatch){
        return dispatch({type: ORDER_POPULATION, payload : order})
    };
   
};
export function createAccount(account){
    return async function (dispatch){
        try {
            const response = await axios.post("http://localhost:3001/users/create", account)
            alert(" Cuenta se ha acreado con exito mi rey")   
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};
export function setContinentFilter(filter){
    return {
        type: SET_CONTINENT_FILTER,
         payload: filter
    }
}
 export function setOrder(countriesOrdered){
    return{
        type: SET_ORDER_ALPHABETIC,
        payload: countriesOrdered
    }
 }
 export function setOrderPopulation(populationOrder){ 
    return {
        type: SET_POPULATION_ORDER,
        payload: populationOrder
    }
}

    export function getAllActivities(){
        return async function(dispatch){
            try {
                const { data } = await axios("http://localhost:3001/activities");
                return dispatch({type: GET_ACTIVITIES, payload: data})
                res.status(200).json(data);
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        }
    }

 
