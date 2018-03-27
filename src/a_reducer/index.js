import {
	combineReducers
} from 'redux';
import {
	routerReducer
} from 'react-router-redux';

import HomeReducer from './home-reducer';

const RootReducer = combineReducers({
	//routing: routerReducer 这是用于redux和react-router的连接
	routing: routerReducer,
	home: HomeReducer,
});

export default RootReducer;