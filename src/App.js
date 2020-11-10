import React, { Component } from 'react';
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ItemForm from './ItemForm/ItemForm';
import WatchList from './WatchList/WatchList';
import Footer from './Footer/Footer';
import './App.css';

// const WATCHLIST = [
//   {
//     "content-title": "Back to the Future II",
//     "rating": "watch",
//   },
//   {
//     "content-title": "Big Short",
//     "rating": "watch",
//   },
//   {
//     "content-title": "The Room",
//     "rating": "watch",
//   },
// ];

class App extends Component {
  state = {
    watchlist: []
  }

  render () {
    return (
      <main className='App'>
        <Nav />

        <Route exact path='/' component={ Home }/> 
        <Route path='/item' component={ ItemForm } />
        <Route path='/watchlist' component={ WatchList } />

        <Footer />
      </main>
    );
  }
}

export default App;
