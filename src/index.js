import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './App';

render(
	<Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
		<App />
	</Provider>,
	document.getElementById('root')
);
