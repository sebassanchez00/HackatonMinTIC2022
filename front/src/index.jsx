import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
<<<<<<< HEAD
import Axios from 'axios'
=======
import './styles/hideScrollBars.css';
>>>>>>> 188bfc24ea9fbc9e865cd7b1f7031964b1741426

Axios.defaults.baseURL='http://localhost:4000'
ReactDOM.render(
  <React.StrictMode>
    <App className="hsb" />
  </React.StrictMode>,
  document.getElementById('root'),
);
