import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import './App.css';
import reducers from './store/reducers';

import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const destination = document.querySelector('#root');

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);
