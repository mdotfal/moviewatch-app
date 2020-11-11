import React, { Component } from 'react';
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ItemForm from './ItemForm/ItemForm';
import WatchList from './WatchList/WatchList';
import Footer from './Footer/Footer';
import './App.css';


class App extends Component {
  state = {
    watchList: []
  }

  render () {
    return (
      <main className='App'>
        <Nav />

        <Route exact path='/' component={ Home }/> 
        <Route exact path='/item' component={ ItemForm } />
        <Route exact path='/watchlist' component={ WatchList } />
        <Footer />
      </main>
    );
  }
}

export default App;
