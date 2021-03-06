
import flightGetter from './flightGetter';
import * as types from './actionTypes'

export  function addFlight(flight){
  return function (dispatch){

    return flightGetter.createFlights(flight).then(flight=>{
      dispatch(createFlightSuccess(flight))
    }).catch(error => {throw(error)})
    }
  }

export function createFlightSuccess(flight){
  
      return {type: types.ADD_FLIGHT_SUCCESS, flight}
    }

  export function deleteFlight(flight){
    return function (dispatch){
      return flightGetter.deleteFlight(flight)


      .then(flight => {dispatch(deleteFlightSuccess(flight))
      }).catch(error => {throw(error)})
    }
  }
  export function deleteFlightSuccess(flight){
    return {type: types.DELETE_FLIGHT_SUCCESS, flight}
  }
    export function addLike(flight){
      // debugger
      return function(dispatch){
        return flightGetter.addLike(flight).then(flight =>{
          dispatch(addLikeSuccess(flight))
        }).catch(error => {throw(error)})
      }
    }
    export function addLikeSuccess(flight){
      return {type: types.ADD_LIKE_SUCCESS, flight}
    }
  
export function loadFlights(){
  return function (dispatch){
    
    return flightGetter.loadAllFlights().then(flights => {
      
      dispatch(loadFlightsSuccess(flights))
    }).catch(error => { throw(error)})
  }
}
export function loadFlightsSuccess(flights){
  return{type: types.LOAD_FLIGHTS_SUCCESS, flights}
}