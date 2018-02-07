// const url = "http://localhost:3000/api"
// import React
import { React } from 'react';

class flightGetter {


    static createFlights(flight){
      return fetch('http://localhost:3000/api/flights', {
        method: 'POST',
        body: JSON.stringify({flight: flight}),
        headers: {
          'Content-Type': 'application/json'
        },
         accepts: 'application/json'
      })
      .then(response => response.json()).catch(error => {return error})
    }

     static loadAllFlights(){
        return fetch('http://localhost:3000/api/flights').then(response => {return response.json()
        }).catch(error => { return error})
      }
  
}
export default flightGetter