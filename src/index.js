import React from 'react';
import ReactDOM from 'react-dom';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './index.css';
//import App from './App';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import {NavBar} from "./NavBar.jsx";
import "./all.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    {/* This works for github pages */}
    <HashRouter> 
    <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <App></App>,
  document.getElementById('root')
);

