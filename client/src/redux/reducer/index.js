import { GET_COUNTRIES, 
         GET_CONTINENT, 
         PAGINATION_ON_OFF, 
         PAGINATION_ACTIVE,
         RETURN_TO_ALL,
         REPLACE_PAGINATION,
         CARD_DETAIL_STATE,
         SET_ACCES,
         ADD_FAVORITE,
         DELETE_FAVORITE,
         SET_CONTINENT_FILTER,
         SET_ORDER_ALPHABETIC,
         SET_POPULATION_ORDER,
         GET_ACTIVITIES,
         PAGINADO_NUEVO,
         RESET_COUNTRIES

        } from "../actions";


let initialState = { allCountries : [],
                     backStateCountries : [],
                     actuallyPage: 0, 
                     allCountriesPage: [],
                     paginationOnOff : "allOn",
                     pageValue: [],
                     cardDetailState: [],
                     accessLog: true,
                     favorites: [],
                     allCountriesFilter: null,
                     getActivities: [],
                     paginasNuevo: 0

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
        case REPLACE_PAGINATION:
            return{
                ...state,
                paginationOnOff: "pageValue",
                pageValue: action.payload

            }
        case CARD_DETAIL_STATE:
            return{
                ...state,
                cardDetailState: action.payload
            }
        case SET_ACCES:
            return{
                ...state,
                favorites : copyCountries, allCountries: [...copyCountries ]

            }
            case ADD_FAVORITE:

                return{
                    ...state,
                    favorites : [...state.favorites, action.payload]
                }

        case DELETE_FAVORITE:
            return {
                ...state,
                favorites :  state.favorites.filter((country)=>  country.id !== action.payload)
            };

       


             return{
                ...state,
                favorites: copyCountriesOrder
             }
            
        
        case SET_CONTINENT_FILTER:
            return{
                ...state,
                allCountriesFilter: action.payload
            }
    
        
        
        case SET_ORDER_ALPHABETIC:
            return{
                ...state,
                allCountries: action.payload
            }
        case SET_POPULATION_ORDER:
            return {
                ...state,
                allCountries: action.payload
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                getActivities : action.payload
            }
        
        case PAGINADO_NUEVO:
            return{
                ...state,
                paginasNuevo: action.payload
            }
        case RESET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }

            default:
            return state;
            

    };

};