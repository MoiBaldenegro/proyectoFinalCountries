import { GET_COUNTRIES, 
         GET_CONTINENT, 
         COUNTRIES_PAGINATION, 
         PAGINATION_ON_OFF, 
         PAGINATION_ACTIVE,
         RETURN_TO_ALL,
         REPLACE_PAGINATION,
         CARD_DETAIL_STATE
,        } from "../actions";


let initialState = { allCountries : [],
                     backStateCountries : [],
                     actuallyPage: 0, 
                     allCountriesPage: [],
                     paginationOnOff : "allOn",
                     pageValue: [],
                     cardDetailState: []
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
        /*case: COUNTRIES_PAGINATION:
            return{


            }*/
        
        default:
            return state;
        
            

    };

};