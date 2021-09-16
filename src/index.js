import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './Routers/AppRouter'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
