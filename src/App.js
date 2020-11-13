import React, { Component } from 'react';
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ItemForm from './ItemForm/ItemForm';
import WatchList from './WatchList/WatchList';
import Footer from './Footer/Footer';
import './App.css';
import AppContext from './AppContext';

// const items = [

//   {
//     title: "Back to the Future II",
//     isNetflix: true,
//     isHulu: true,
//     isPrime: true,
//     rating: "Watch",
//   },
//   {
//     title: "The Room",
//     isNetflix: false,
//     isHulu: false,
//     isPrime: true,
//     rating: "Skip",
//   },
//   {
//     title: "The Avengers",
//     isNetflix: true,
//     isHulu: false,
//     isPrime: true,
//     rating: "Watch",
//   },
 
// ]
class App extends Component {

  state = {
    items : [

      {
        title: "Back to the Future II",
        isNetflix: true,
        isHulu: true,
        isPrime: true,
        rating: "Watch",
      },
      {
        title: "The Room",
        isNetflix: false,
        isHulu: false,
        isPrime: true,
        rating: "Skip",
      },
      {
        title: "The Avengers",
        isNetflix: true,
        isHulu: false,
        isPrime: true,
        rating: "Watch",
      },
     
    ],
    error: null,
  }

  setItems = items => {
    this.setState({
      ...items,
      error: null
    })
  }

  handleDeleteItem = item => {
    console.log( 'handle delete clicked', { item })
    const newItems = this.state.items.filter( itm => itm !== item )
    this.setState({
      items: newItems
    })
  }

  handleEditItem = item => {
    console.log( 'handle edit clicked', { item } )
  }

  handleAddItem = ( itemName ) => {
    console.log( 'handle add item', { itemName } )
    const newItems = [
      ...this.state.items,
      { 
        title: itemName    
      }
    ]
    this.setState({
      items: newItems
    })
  }

  componentDidMount

  // handleSetItem = newItem => {
  //   this.setState({ newItem })
  // }

  render () {

    const value = {
      items: this.state.items,
      onDeleteItem: this.handleDeleteItem,
      onEditItem: this.handleEditItem,
      onAddItem: this.handleAddItem,
      setItem: this.handleSetItem
    }

    return (
      <AppContext.Provider value={ value }>
        <main className='App'>
          <Nav />
          <Route exact path='/' component={ Home }/> 
          <Route exact path='/' 
            render={ () =>
              <ItemForm value={ value }/>
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
