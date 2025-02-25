import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './FederalDashboard.css';
// import App from './App';  // Comment this out if you want to use FederalDashboard
import FederalDashboard from './FederalDashboard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FederalDashboard />
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();