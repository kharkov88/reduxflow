import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from'react-redux';
import logger from 'redux-logger'

import reducer from './reducer';
import {getData} from './createActions';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
	reducer,
	applyMiddleware(thunk, logger)
	);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));

registerServiceWorker();
