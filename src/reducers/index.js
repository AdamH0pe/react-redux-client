import { combineReducers } from 'redux';

import defaultReducer from './default'; 

export default combineReducers({ initial: defaultReducer });  