import { combineReducers } from 'redux';
import reducerGeojson from './reducerGeojson.js';

const vacantMap = combineReducers ({
  reducerGeojson,

}) ;
export default vacantMap;
