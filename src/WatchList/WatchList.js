import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
// import watchList from '../watchList';
import AppContext from '../AppContext';
import './WatchList.css';

class WatchList extends Component {
  static contextType = AppContext;

  render() {
    const { items } = this.context
    
    return (
      <div>
        <main className="main">
          <header className="banner">
            <h1>Watchlist</h1>
          </header>
          { items.map( ( item, i ) => {
            return <ListItem 
              key={ i } 
              item={ item }
              onDeleteItem={ this.context.onDeleteItem }
              onEditItem={ this.context.onEditItem }
            />
          }) } 
        </main> 
      </div>
    );
  }
};

WatchList.defaultProps = {
  items: []
}

export default WatchList;