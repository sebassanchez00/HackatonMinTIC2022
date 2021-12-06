import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Axios from 'axios'
import './styles/hideScrollBars.css';

Axios.defaults.baseURL='http://localhost:4000'
ReactDOM.render(
  <React.StrictMode>
    <App className="hsb" />
  </React.StrictMode>,
  document.getElementById('root'),
);
