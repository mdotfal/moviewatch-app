import React, { Component } from 'react';
import Nav from './Nav/Nav';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import ItemForm from './ItemForm/ItemForm';
import WatchList from './WatchList/WatchList';
import watchList from './watchList';
import Footer from './Footer/Footer';
import './App.css';
import AppContext from './AppContext';
// import config from './config';

class App extends Component {

  state = {
    items : [],
    error: null,
  }

  handleDeleteItem = item => {
    const newItems = this.state.items.filter( itm => itm !== item )
    this.setState({
      items: newItems
    })
  }

  handleEditItem = item => {
    // console.log( 'handle edit clicked', { item } )
  }

  handleAddItem = ( title, rating, isNetflix, isHulu, isPrime ) => {
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

  // setItems = () => {
  //   this.setState({
  //     items: watchList
  //   })
  // }

  componentDidMount = () => {

    this.setState({
      items: watchList
    })
    // const url = config.API_ENDPOINT;
    // fetch( `${ url }/watchlist`, {
    //   method: 'GET',
    //   headers: {
    //     'content-type': 'application/json',
    //   }
    // })
    //   .then( res => {
    //     if( !res.ok ) {
    //       throw new Error( res.status )
    //     }
    //     return res.json()
    //   })
    //   .then( data => {
    //     this.setState({
    //       items: watchList
    //     })
    //   })
    //   .catch( error => this.setState( { error } ))
  }

  render () {

    const value = {
      items: this.state.items,
      onDeleteItem: this.handleDeleteItem,
      onEditItem: this.handleEditItem,
      onAddItem: this.handleAddItem
    }

    return (
      <AppContext.Provider value={ value }>
        <main className='App'>
          <Nav />
          <Route exact path='/' component={ Home }/> 
          <Route exact path='/' 
            render={ ( routeProps ) =>
              <ItemForm state={ this.state } value={ value } { ...routeProps }/>
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
