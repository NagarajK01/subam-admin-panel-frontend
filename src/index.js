import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './store';

axios.interceptors.request.use(
  (req => {
    const accessToken = localStorage.getItem("authToken");
    req.headers.Authorization = accessToken;
    return req
  }),
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (req => {
    return req
  }),
  (err) => {
    if (err.response) {
      if (err.response.status === 403) {
        localStorage.removeItem("authToken");
        window.location = "/";
      }
    }
    return Promise.reject(err);
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
