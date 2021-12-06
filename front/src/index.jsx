import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/hideScrollBars.css';

ReactDOM.render(
  <React.StrictMode>
    <App className="hsb" />
  </React.StrictMode>,
  document.getElementById('root'),
);
