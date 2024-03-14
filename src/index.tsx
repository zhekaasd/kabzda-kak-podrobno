import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { moduleTest } from './js-native-online-lesson/01_sprint1';

const a = moduleTest;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
