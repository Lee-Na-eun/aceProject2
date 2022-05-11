import './App.css';
import LoginSignup from "./pages/loginSignup";
import Main from "./pages/main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

    // console.log(window.location.href = 'http://localhost:3000/main')
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path='/' element={<LoginSignup />} />
                <Route path='/main' element={<Main />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
