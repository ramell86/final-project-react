import React, {component} from 'react'
// import FlightContainer from './FlightContainer'
// // import CreateFlight from './CreateFlight';

import { BrowserRouter as Route, Router, Link } from 'react-router-dom';
import ShowFlight from './showFlight';

 
const Flight = ({match, flights}) => {

  
  const renderFlights =  flights.map((flight) => <div><ul><Link key={flight.id} to={`/flights/${flight.id}`}> Date: {flight.date} - Pilot: {flight.pilot} - Plane: {flight.planeNumber} </Link></ul> </div>)
     
  return(
    <div>
      <h2> Future Flights </h2>
      {flights ? renderFlights : "none"}
      {/* // <p>{flights > 0 renderFlights : "no flights yet"} </p> */}
      
    </div>
  )

}
export default Flight