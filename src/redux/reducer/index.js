import {combineReducers} from 'redux';
import commonReducer from './commonReducer';
import productReducer from './productReducer';
export default combineReducers({
    commonReducer,
    productReducer,
})