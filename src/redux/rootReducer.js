import { combineReducers } from 'redux';
import userInfoReducer from './user/userInfo'

const reducer = combineReducers({
    userInfo : userInfoReducer
});

export default reducer;