import { combineReducers } from 'redux';
import userReducer, { USER_NAMESPACE } from './user/userReducer';
import version from "./version";


export default combineReducers({
    version: (state: number = version) => state,
    [USER_NAMESPACE]: userReducer
});