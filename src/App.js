import 'App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routePageDatas} from "data/pageData";
import {useSelector} from "react-redux";
import {modalDetailStatus} from "./redux/modal/modalOpen";
import ModalDetail from "./component/modalDetailContent";
import ModalInsert from "./component/modalInsertContent";
import ModalLogout from "./component/modalLogout";

function App() {
    const routePage = routePageDatas
    const detailModalStatus = useSelector(modalDetailStatus);


    return (
        <div className="App">
            {detailModalStatus.detailModalOpen ? <ModalDetail /> : null}
            {detailModalStatus.insertModalOpen ? <ModalInsert /> : null}
            {detailModalStatus.logoutModalOpen ? <ModalLogout /> : null}
            <BrowserRouter>
                <Routes>
                    {routePage.map(
                        (el, idx) =>
                            <Route key={idx} path={el.routePath} element={el.page}  />)}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;