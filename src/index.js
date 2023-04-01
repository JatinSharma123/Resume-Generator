import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HomeContext, HomeState } from './context/HomeState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeState>


    <App />
    </HomeState>
  </React.StrictMode>
);


