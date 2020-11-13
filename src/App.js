import React, { Component } from 'react';
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ItemForm from './ItemForm/ItemForm';
import WatchList from './WatchList/WatchList';
import Footer from './Footer/Footer';
import './App.css';
import AppContext from './AppContext';

class App extends Component {

  state = {
    items : [],
    newItem: {
      title: {
        value: ''
      },
      rating: {
        value: ''
      },
      isNetflix: {
        value: false
      },
      isHulu: {
        value: false
      },
      isPrime: {
        value: false
      },
    },
    error: null,
  }

  handleDeleteItem = item => {
    // console.log( 'handle delete clicked', { item })
    const newItems = this.state.items.filter( itm => itm !== item )
    this.setState({
      items: newItems
    })
  }

  handleEditItem = item => {
    // console.log( 'handle edit clicked', { item } )
  }

  handleAddItem = ( title, rating, isNetflix, isHulu, isPrime ) => {
    // console.log( 'handle add item', { title, rating } )
    const newItems = [
      ...this.state.items,
      { 
        title,
        rating,
        isNetflix,
        isHulu,
        isPrime    
      }
    ]
    this.setState({
      items: newItems
    })
  }

  render () {

    const value = {
      items: this.state.items,
      onDeleteItem: this.handleDeleteItem,
      onEditItem: this.handleEditItem,
      onAddItem: this.handleAddItem,
      setItem: this.handleSetItem
    }
    console.log( this.state )
    return (
      <AppContext.Provider value={ value }>
        <main className='App'>
          <Nav />
          <Route exact path='/' component={ Home }/> 
          <Route exact path='/' 
            render={ () =>
              <ItemForm state={ this.state } value={ value }/>
            }/>
          <Route 
            exact path='/watchlist' 
            render={ () => 
              <WatchList value={ value } /> 
            }/>
          <Footer />
        </main>
      </AppContext.Provider>
    );
  }
}

export default App;
