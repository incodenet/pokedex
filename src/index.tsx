import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {CApp} from './components/containers/c-app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CApp />
  </React.StrictMode>
);
