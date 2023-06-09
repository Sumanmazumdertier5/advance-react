import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {rbgInstance} from "./configuration/rbginstance";
import axios from "axios";
import {applyMiddleware, createStore} from "redux";
import rootReducer from './Redux/Reducer/RootReducer';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";

axios.interceptors.request.use(rbgInstance.authorizerInterceptor);
rbgInstance.disableProdConsole();
const myLogger = (store) => (type)=> (action) => {
  console.log("Logged Action", action);
  type(action);
  console.log("Logger Store", store);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, applyMiddleware(thunk));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
