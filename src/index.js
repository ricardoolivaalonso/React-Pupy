import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/App';
import { BrowserRouter } from 'react-router-dom'
import './scss/styles.scss'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

