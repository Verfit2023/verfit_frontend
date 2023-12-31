import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SignupCompletePage from './pages/SignupCompletePage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import GeneratePage from './pages/GeneratePage';
import WorkbookPage from './pages/WorkbookPage';
import WorkbookDetailPage from './pages/WorkbookDetailPage';
import GenerateCompletePage from './pages/GenerateCompletePage';
import AbilityTestPage from './pages/AbilityTestPage';

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
          <Route path='/generate' element={<GeneratePage />} />
          <Route path='/generate/complete' element={<GenerateCompletePage />} />
          <Route path='/workbook' element={<WorkbookPage />} />
          <Route path='/workbook/:id' element={<WorkbookDetailPage />} />
          <Route path='/ability-test' element={<AbilityTestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
