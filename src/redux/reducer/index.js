import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';


const redux = combineReducers({ registerReducer, globalReducer, photoReducer})

export default redux;
