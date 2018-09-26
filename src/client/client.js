import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.hydrate(
  <Router>
    <Routes />
  </Router>
  , document.querySelector('#root'));