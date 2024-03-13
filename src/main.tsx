import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HomePage, CameraPage, TodosPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainProvider } from './components/providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/camera" element={<CameraPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>
);
