import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import ItemForm from './ItemForm/ItemForm';
// import WatchList from './WatchList/WatchList';

ReactDOM.render( 
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);