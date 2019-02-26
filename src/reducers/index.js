import authReducer from './authReducer';
import streamReducer from './streamReducer';
import { reducer as formReducer } from "redux-form";
import { combineReducers } from 'redux';

export default combineReducers({
    auth: authReducer,
    form:  formReducer,
    stream: streamReducer
});