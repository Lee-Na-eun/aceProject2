import { combineReducers } from 'redux';
import userInfoReducer from './user/userInfo';
import navStatusReducer from './nav/navOpen'
import detailModalReducer from './modal/modalOpen';
import saveBoardIdReducer from './modal/saveBoardId';
import detailContentReducer from './modal/saveContent'
import contentDataReducer from './content/contentData'

const reducer = combineReducers({
    userInfo : userInfoReducer,
    navOpen : navStatusReducer,
    detailModal : detailModalReducer,
    saveBoardId : saveBoardIdReducer,
    detailContent : detailContentReducer,
    contentData : contentDataReducer
});

export default reducer;