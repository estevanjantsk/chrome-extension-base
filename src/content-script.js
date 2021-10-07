/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

const title = 'React with Webpack and Babel';

const init = () => {
  console.log('initializing app...');
  ReactDOM.render(
    <App title={title} />,
    document.body.appendChild(document.createElement('DIV')),
  );
};

init();
