import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import flightReducer from './reducers/flightReducer'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(flightReducer)

ReactDOM.render(
<Provider store={store}>
<App store={store}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();

