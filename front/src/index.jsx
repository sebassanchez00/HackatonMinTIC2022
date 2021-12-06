import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Axios from 'axios'

Axios.defaults.baseURL='http://localhost:4000'
ReactDOM.render(
  <React.StrictMode>
    <App className="hsb" />
  </React.StrictMode>,
  document.getElementById('root'),
);
