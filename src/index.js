import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './Components/ReduxHooks/Store';
import {Provider} from 'react-redux'
import store from '../src/Redux-ToDo/Store';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
