import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	Router,
	browserHistory
} from 'react-router';

import 'babel-polyfill';

import store from './store';

import IndexRootes from './route';

ReactDOM.render(
	<Provider store={store}>
		<Router routes={IndexRootes} history={browserHistory} queryKey={false}></Router>
	</Provider>,
	document.getElementById('root')
);