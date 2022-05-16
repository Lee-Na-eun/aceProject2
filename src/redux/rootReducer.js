import { combineReducers } from 'redux';
import userInfoReducer from './user/userInfo';
import navStatusReducer from './nav/navOpen'
import detailModalReducer from './modal/modaOpen';
import saveBoardIdReducer from './modal/saveBoardId';
import detailContentReducer from './modal/saveContent'

const reducer = combineReducers({
    userInfo : userInfoReducer,
    navOpen : navStatusReducer,
    detailModal : detailModalReducer,
    saveBoardId : saveBoardIdReducer,
    detailContent : detailContentReducer
});

export default reducer;