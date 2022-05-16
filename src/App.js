import 'App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routePageDatas} from "data/pageData";

function App() {

    const routePage = routePageDatas

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {routePage.map(
                        (el, idx) =>
                            <Route key={idx} path={el.routePath} element={el.page}/>)}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;