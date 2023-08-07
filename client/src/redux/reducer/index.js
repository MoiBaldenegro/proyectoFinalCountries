import { GET_COUNTRIES, 
         GET_CONTINENT, 
         COUNTRIES_PAGINATION, 
         PAGINATION_ON_OFF, 
         PAGINATION_ACTIVE,
        RETURN_TO_ALL } from "../actions";


let initialState = { allCountries : [],
                     backStateCountries : [],
                     actuallyPage: 0, 
                     allCountriesPage: [],
                     paginationOnOff : "allOn"
                   };

export default function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_COUNTRIES:
            return{
                ...state,
                allCountries: action.payload,
                backStateCountries : action.payload
            };
        case GET_CONTINENT:
            return{
                ...state,
                 allCountries: action.payload
            };

        case PAGINATION_ON_OFF:
            return{
                ...state,
                paginationOnOff: action.payload
            }
        case PAGINATION_ACTIVE:
            return{
                ...state,
                paginationOnOff: action.payload
            }
        case RETURN_TO_ALL:
            return{
                ...state,
                paginationOnOff: action.payload
            }
        /*case: COUNTRIES_PAGINATION:
            return{


            }*/
        
        default:
            return state;
        
            

    };

};