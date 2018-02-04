import {combineReducers} from 'redux'
// import { routerReducer} from 'react-router-redux'

import flightReducer from './flightReducer'
import planeReducer from './planeReducer'

const rootReducer = combineReducers({flightReducer, planeReducer})

export default rootReducer