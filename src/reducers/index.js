import { combineReducers } from 'redux';
import majorIndexesReducer from './marketIndexes';
import loaderReducer from './loadReducer';

export default combineReducers({ market: majorIndexesReducer, load: loaderReducer });
