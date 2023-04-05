import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider as StoreProvider} from 'react-redux';
import {CApp} from './components/containers/c-app';
import {store} from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <CApp />
    </StoreProvider>
  </React.StrictMode>
);
