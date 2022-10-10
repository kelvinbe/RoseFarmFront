import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';


import Games from './components/Games/Games'
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login'
import Account from './components/Account/Account';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Routes>
    <Route  path="/" element={<App />} />
    <Route  path="games" element={<Games />} />
    <Route  path="/signup" element={<SignUp />} />
    <Route  path="/login" element={<Login />} />
    <Route  path="/account" element={<Account />} />


    </Routes>
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
