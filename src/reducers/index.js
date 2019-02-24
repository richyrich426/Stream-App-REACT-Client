import authReducer from './authReducer';
import { reducer as formReducer } from "redux-form";
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    form:  formReducer
});