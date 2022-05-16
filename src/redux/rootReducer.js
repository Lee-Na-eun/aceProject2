import { combineReducers } from 'redux';
import userInfoReducer from './user/userInfo';
import navStatusReducer from './nav/navOpen'

const reducer = combineReducers({
    userInfo : userInfoReducer,
    navOpen : navStatusReducer
});

export default reducer;