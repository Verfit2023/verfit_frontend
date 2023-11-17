import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="h-full bg-white">
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
