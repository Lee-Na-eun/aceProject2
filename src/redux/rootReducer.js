import { combineReducers } from 'redux';
import userInfoReducer from './user/userInfo';
import navStatusReducer from './nav/navOpen'
import detailModalReducer from './modal/modaOpen';
import saveBoardIdReducer from "./modal/saveBoardId";

const reducer = combineReducers({
    userInfo : userInfoReducer,
    navOpen : navStatusReducer,
    detailModal : detailModalReducer,
    saveBoardId : saveBoardIdReducer
});

export default reducer;