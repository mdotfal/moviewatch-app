import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './Reducer';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render( 
  <BrowserRouter>
    <StateProvider initialState={ initialState } reducer={ reducer }>
     <App />
    </StateProvider>
  </BrowserRouter>, 
  document.getElementById( 'root' )
);