import React, { Component } from 'react';
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ItemForm from './ItemForm/ItemForm';
import WatchList from './WatchList/WatchList';
import Footer from './Footer/Footer';
import './App.css';
import AppContext from './AppContext';
import EditItem from './EditItem/EditItem';
import config from './config';

class App extends Component {

  state = {
    items : [],
    error: null,
  };

  componentDidMount = () => {
    const url = config.API_ENDPOINT;
    fetch( `${ url }/api/items` )
    .then( res => {
      if( !res.ok ) {
        throw new Error( res.status );
      }
      return res.json();
    })
    .then( data => {
      this.setState({
        items: data
      });
    })
    .catch( error => this.setState( { error } ));
  };

  handleDeleteItem = itemId => {
    const newItems = this.state.items.filter( itm => itm.id !== itemId );
    this.setState({
      items: newItems
    });
  };

  handleAddItem = item => {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    });
  };

  setItems = items => {
    this.setState({
      items,
      error: null
    });
  };

  handleUpdateItem = ( updatedItem )  => {
    const newItems = this.state.items.map( itm =>
      ( itm.id === updatedItem.id )
      ? updatedItem 
      : itm  
      );
      this.setState({
        items: newItems
      });
    };

  render () {

    const value = {
      items: this.state.items,
      onDeleteItem: this.handleDeleteItem,
      onUpdateItem: this.handleUpdateItem,
      onAddItem: this.handleAddItem
    };

    return (
      <AppContext.Provider value={ value } >
        <main className='App'>
          <Nav />
          <Route 
            exact path='/' 
            component={ Home }/> 
          <Route 
            exact 
            path='/' 
            component={ ItemForm }
            />
          <Route 
            path='/edit/:itemId' 
            component={ EditItem } 
            value={ value }/>
          <Route 
            exact path='/watchlist' 
            component={ WatchList }/>
          <Footer />
        </main>
      </AppContext.Provider>
    );
  };
};

export default App;
