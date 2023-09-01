import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';


// Use the new createRoot API
const root = document.getElementById('root');
const appRoot = createRoot(root);
appRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();
