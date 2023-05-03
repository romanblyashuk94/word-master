import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes, Route, Navigate, HashRouter,
} from 'react-router-dom';
import './index.scss';
import App from './App';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Navigate to="../" replace />} />
            <Route index element={<HomePage />} />
            <Route path="test" element={<TestPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
