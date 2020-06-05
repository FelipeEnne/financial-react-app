import { combineReducers } from 'redux';
import majorIndexesReducer from './marketIndexes';
import loaderReducer from './loadReducer';

const rootReducer = combineReducers({ majorIndexes: majorIndexesReducer, status: loaderReducer });

export default rootReducer;
