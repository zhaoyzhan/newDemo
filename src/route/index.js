import React from 'react';
import {
	Route,
	Redirect,
	IndexRedirect
} from 'react-router';

import RootContainer from '../a_container/root/';
import HomeCon from '../a_container/home';

export default (
	<Route path="/" component={RootContainer}>
		<IndexRedirect to="/home" />
		<Route path="/home" component={HomeCon}></Route>
		<Redirect from='*' to='/'  />
	</Route>
);