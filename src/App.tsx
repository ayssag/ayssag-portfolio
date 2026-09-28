import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LanguageGuard from './i18n/LanguageGuard';
import Home from './components/pages/home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pt/home" replace />} />
        <Route path="/:lang" element={<LanguageGuard />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Navigate to="home" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/pt/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
