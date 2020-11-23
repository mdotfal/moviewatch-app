import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import AppContext from '../AppContext';
import './WatchList.css';

class WatchList extends Component {
  static contextType = AppContext;

  render() {
    const { items } = this.context;
    
    return (
      <div>
        <main className="main">
          <header className="banner">
            <h1>Watchlist</h1>
          </header>

          {/* ITEMS ARRAY MAP TO DISPLAY ListItem COMPONENTS ON WATCHLIST */}

          { items.map( ( item, i ) => {
            return <ListItem 
              key={ i } 
              item={ item }
              onDeleteItem={ this.context.onDeleteItem }
            />
          }) } 
        </main> 
      </div>
    );
  };
};

WatchList.defaultProps = {
  items: []
};

export default WatchList;