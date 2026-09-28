import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LanguageGuard from './i18n/LanguageGuard';
import Home from './components/pages/home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pt/home" replace />} />
        <Route path="/:lang" element={<LanguageGuard />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/pt" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/pt" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
