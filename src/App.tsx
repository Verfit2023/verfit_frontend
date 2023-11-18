import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import SignupCompletePage from './pages/SignupCompletePage';

function App() {
  return (
    <div className="h-full bg-white">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signup/complete' element={<SignupCompletePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
