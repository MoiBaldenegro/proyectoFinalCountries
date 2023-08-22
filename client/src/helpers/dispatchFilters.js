



export default function handleDispatches(dispatch, event){
    const { name, value } = event.target;
    if ( name === "filterByContinent"){
        dispatch(filterCountriesByContinent(value))
    }
}
