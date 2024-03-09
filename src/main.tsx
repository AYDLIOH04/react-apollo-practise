import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HomePage, CameraPage, AboutPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './components/providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/camera" element={<CameraPage />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
