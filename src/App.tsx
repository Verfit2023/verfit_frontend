import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="h-full bg-white">
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
