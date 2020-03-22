import React from 'react';
import reactDom from 'react-dom';
import App from './App';
import './App.css';

const destination = document.querySelector('#root'); // html root of the app

reactDom.render(<App />, destination);
