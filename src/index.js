import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// eslint-disable-next-line import/extensions
import reportWebVitals from './reportWebVitals';
/* eslint-enable no-unused-vars */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Report web vitals metrics
reportWebVitals();
