import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SignupCompletePage from './pages/SignupCompletePage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div className="h-full bg-white">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signup/complete' element={<SignupCompletePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
