import { GET_COUNTRIES, 
         GET_CONTINENT, 
         COUNTRIES_PAGINATION, 
         PAGINATION_ON_OFF, 
         PAGINATION_ACTIVE,
         RETURN_TO_ALL,
         REPLACE_PAGINATION,
         CARD_DETAIL_STATE,
         SET_ACCES,
         ADD_FAVORITE,
         DELETE_FAVORITE,
         MASTER_FILTER,
         ORDER_POPULATION,
         SET_CONTINENT_FILTER,
         SET_ORDER_ALPHABETIC,
         SET_POPULATION_ORDER,
         GET_ACTIVITIES

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
                     getActivities: []
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
        case DELETE_FAVORITE:
            return {
                ...state,
                favorites :  state.favorites.filter((country)=>  country.id !== action.payload)
            };

        case  ORDER_POPULATION:
             let copyCountriesOrder = [...state.allCountriesFilter.sort((a,b)=>{
                if(action.payload === "A"){
                    if (a.population > b.population) {
                        return 1;
                    }
                    if (a.population < b .population) {
                      return -1  
                    }
                    return 0
                }
                if( action.payload === "B"){
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (a.population < b.population ) {
                      return 1  
                    }
                    return 0
                }else{
                    return 
                    
                }
             })];


             return{
                ...state,
                favorites: copyCountriesOrder
             }
            
        
        case SET_CONTINENT_FILTER:
            return{
                ...state,
                allCountriesFilter: action.payload
            }
        
        default:
            return state;
        
        
        case SET_ORDER_ALPHABETIC:
            return{
                ...state,
                allCountriesFilter: action.payload
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
        
            

    };

};