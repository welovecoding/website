import categoriesReducer from './categories/categoriesReducer';
import statusReducer from './status/statusReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  categories: categoriesReducer,
  status: statusReducer,
});